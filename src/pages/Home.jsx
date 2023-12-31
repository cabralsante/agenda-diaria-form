import styled from "styled-components";
import { HeaderContainer, HeaderImage, HeaderText } from "../components/Header";
import { FormContainer } from "../components/Form";
import { Input, InputWrap, Label } from "../components/Input";
import { useEffect, useState } from "react";
import LoaderCSS from "../components/Loader";
import LOGO from "../assets/DENTAL_SANTE_LOGO.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

function Home() {

  const [allData, setAllData] = useState({
    morningScheduled: "",
    morningMissed: "",
    afternoonScheduled: "",
    afternoonMissed: "",
    saleQuantity: "",
    saleValue: "",
    dayScheduling: "",
    monthScheduling: "",
    dayAttendance: "",
    monthAttendance: "",
    returnVanessa: "",
    followUp: "",
    firstTimeDila: "",
    total: "",
    cashDaily: "",
    returnVanessaAccumulated: "",
    followUpAccumulated: "",
    firstTimeDilaAccumulated: "",
    totalAccumulated: "",
    cashAccumulated: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(allData.morningMissed && allData.morningScheduled && allData.afternoonMissed && allData.afternoonScheduled && allData.attended && allData.saleQuantity && allData.saleValue && allData.dayScheduling && allData.monthScheduling && allData.dayAttendance && allData.monthAttendance && allData.returnVanessa && allData.followUp && allData.firstTimeDila && allData.total && allData.returnVanessaAccumulated && allData.followUpAccumulated && allData.firstTimeDilaAccumulated && allData.totalAccumulated && allData.cashAccumulated) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [allData]);

  const sendValues = async ( values ) => {
    await fetch("https://spreadsheetapi.institutodentalsante.com.br/spreadsheet/addRow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "values": values,
      }),
    }).then((response) => {
        setAllData({
          morningScheduled: "",
          morningMissed: "",
          afternoonScheduled: "",
          afternoonMissed: "",
          attended: "",
          saleQuantity: "",
          saleValue: "",
          dayScheduling: "",
          monthScheduling: "",
          dayAttendance: "",
          monthAttendance: "",
          returnVanessa: "",
          followUp: "",
          firstTimeDila: "",
          total: "",
          cashDaily: "",
          returnVanessaAccumulated: "",
          followUpAccumulated: "",
          firstTimeDilaAccumulated: "",
          totalAccumulated: "",
          cashAccumulated: "",
        });
        
        window.alert("Dados enviados com sucesso!");
        console.log(response);
        appearLoader(false);

      }).catch((error) => {
        window.alert("Erro ao enviar dados!");
        console.log(error);
        appearLoader(false);

    });
  }

  const appearLoader = ( boolean ) => {
    if(boolean) {
      setIsLoading(true);
      window.document.body.style.overflow = "hidden";
    } else {
      setIsLoading(false);
      window.document.body.style.overflow = "auto";
    }
  }

  const handleSubmit = (e) => {
    if(!allData.morningScheduled && !allData.morningMissed && !allData.afternoonScheduled && !allData.afternoonMissed && !allData.attended && !allData.saleQuantity && !allData.saleValue && !allData.dayScheduling && !allData.monthScheduling && !allData.dayAttendance && !allData.monthAttendance && !allData.returnVanessa && !allData.followUp && !allData.firstTimeDila && !allData.total && !allData.cashDaily && !allData.returnVanessaAccumulated && !allData.followUpAccumulated && !allData.firstTimeDilaAccumulated && !allData.totalAccumulated && !allData.cashAccumulated) {
      window.alert("Preencha todos os campos!");
      return;
    }

    e.preventDefault();

    const values = [
      [
      new Date().toISOString().split("T")[0],
      allData.morningScheduled,
      allData.morningMissed,
      allData.afternoonScheduled,
      allData.afternoonMissed,
      allData.attended,
      allData.saleQuantity,
      allData.saleValue,
      allData.dayScheduling,
      allData.monthScheduling,
      allData.dayAttendance,
      allData.monthAttendance,
      allData.returnVanessa,
      allData.followUp,
      allData.firstTimeDila,
      allData.total,
      allData.cashDaily,
      allData.returnVanessaAccumulated,
      allData.followUpAccumulated,
      allData.firstTimeDilaAccumulated,
      allData.totalAccumulated,
      allData.cashAccumulated,
      ]
    ];

    const parsedValues = values.map((value) => {
      return value.map((item, index) => {
        if(index === 0) {
          return item;
        } else {
          return Number(item.replace(/,/g, '.'));
        }
      });
    });

    appearLoader(true);
    sendValues(parsedValues);
  };

  return (
    <Container>
      {isLoading && (
        <LoaderCSS />
      )}
      <HeaderContainer>
        <HeaderImage src={LOGO} />
        <HeaderText>Dados Diários - Dental Santé</HeaderText>
      </HeaderContainer>
      <FormContainer>
        <InputWrap mode="w-100">
          <Input type="date" required defaultValue={new Date().toISOString().split("T")[0]} />
          <Label>Data</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.morningScheduled} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                morningScheduled: value, 
              })
            }
          }/>
          <Label>Agendados - Manhã</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.morningMissed} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                morningMissed: value,
              })
            }
          }/>
          <Label>Faltaram - Manhã</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.afternoonScheduled} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                afternoonScheduled: value,
              })
            }
          }/>
          <Label>Agendados - Tarde</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.afternoonMissed} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                afternoonMissed: value,
              })
            }
          }/>
          <Label>Faltaram - Tarde</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="text" value={allData.attended} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                attended: value,
              })
            }
          }/>
          <Label>Compareceram</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.saleQuantity} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                saleQuantity: value,
              })
            }
          }/>
          <Label>Venda - Quantidade</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.saleValue} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                saleValue: value,
              })
            }
          }/>
          <Label>Venda - Valor</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.dayScheduling} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                dayScheduling: value,
              })
            }
          }/>
          <Label>Agendamentos  - Dia</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.monthScheduling} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                monthScheduling: value,
              })
            }
          }/>
          <Label>Agendamentos  - Mês</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.dayAttendance} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                dayAttendance: value,
              })
            }
          }/>
          <Label>Comparecimento - Dia</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.monthAttendance} required onChange={ (e) => {

              let value = e.target.value.replace(/\D/, '');

              setAllData({
                ...allData,
                monthAttendance: value,
              })
            }
          }/>
          <Label>Comparecimento - Mês</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <hr />
          <HeaderText style={{
            "textAlign": "center",
            "width": "100%",
            "margin": "30px 0",
          }}>Faturamento do Dia</HeaderText>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.returnVanessa} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                returnVanessa: value,
              })
            }
          }/>
          <Label>Retorno (Vanessa)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.followUp} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                followUp: value,
              })
            }
          }/>
          <Label>Follow-up</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.firstTimeDila} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                firstTimeDila: value,
              })
            }
          }/>
          <Label>Primeira vez (Dila)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.total} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                total: value,
              })
            }
          }/>
          <Label>Total</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="text" value={allData.cashDaily} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                cashDaily: value,
              })
            }
          }/>
          <Label>Caixa Diário</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <hr />
          <HeaderText style={{
            "textAlign": "center",
            "width": "100%",
            "margin": "30px 0",
          }}>Faturamento Acumulado</HeaderText>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.returnVanessaAccumulated} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                returnVanessaAccumulated: value,
              })
            }
          }/>
          <Label>Retorno (Vanessa)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.followUpAccumulated} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                followUpAccumulated: value,
              })
            }
          }/>
          <Label>Follow-up</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.firstTimeDilaAccumulated} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                firstTimeDilaAccumulated: value,
              })
            }
          }/>
          <Label>Primeira vez (Dila)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="text" value={allData.totalAccumulated} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                totalAccumulated: value,
              })
            }
          }/>
          <Label>Total</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="text" value={allData.cashAccumulated} required onChange={ (e) => {

              let value = e.target.value.replace(/[^0-9.,]/g, '');

              setAllData({
                ...allData,
                cashAccumulated: value,
              })
            }
          }/>
          <Label>Caixa Acumulado</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="submit" value="Enviar" onClick={handleSubmit} disabled={isDisabled}/>
        </InputWrap>

      </FormContainer>
    </Container>
  );
}

export default Home;