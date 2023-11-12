import styled from "styled-components";
import { HeaderContainer, HeaderText } from "../components/Header";
import { FormContainer } from "../components/Form";
import { Input, InputWrap, Label } from "../components/Input";
import { useEffect, useState } from "react";
import LoaderCSS from "../components/Loader";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

function Home() {

  const [allData, setAllData] = useState({
    morningScheduled: "",
    morningAttended: "",
    afternoonScheduled: "",
    afternoonAttended: "",
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
    returnVanessaAccumulated: "",
    followUpAccumulated: "",
    firstTimeDilaAccumulated: "",
    totalAccumulated: "",
    cashAccumulated: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(allData.morningScheduled, allData.morningAttended, allData.afternoonScheduled, allData.afternoonAttended, allData.saleQuantity, allData.saleValue, allData.dayScheduling, allData.monthScheduling, allData.dayAttendance, allData.monthAttendance, allData.returnVanessa, allData.followUp, allData.firstTimeDila, allData.total, allData.returnVanessaAccumulated, allData.followUpAccumulated, allData.firstTimeDilaAccumulated, allData.totalAccumulated, allData.cashAccumulated) {
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
          morningAttended: "",
          afternoonScheduled: "",
          afternoonAttended: "",
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
          returnVanessaAccumulated: "",
          followUpAccumulated: "",
          firstTimeDilaAccumulated: "",
          totalAccumulated: "",
          cashAccumulated: "",
        });
        
        window.alert("Dados enviados com sucesso!");
        console.log(response);
        setIsLoading(false);

      }).catch((error) => {
        window.alert("Erro ao enviar dados!");
        console.log(error);
        setIsLoading(false);

    });
  }


  const handleSubmit = (e) => {
    if(!allData.morningScheduled, !allData.morningAttended, !allData.afternoonScheduled, !allData.afternoonAttended, !allData.saleQuantity, !allData.saleValue, !allData.dayScheduling, !allData.monthScheduling, !allData.dayAttendance, !allData.monthAttendance, !allData.returnVanessa, !allData.followUp, !allData.firstTimeDila, !allData.total, !allData.returnVanessaAccumulated, !allData.followUpAccumulated, !allData.firstTimeDilaAccumulated, !allData.totalAccumulated, !allData.cashAccumulated) {
      window.alert("Preencha todos os campos!");
      return;
    }

    e.preventDefault();

    const values = [
      [
      new Date().toISOString().split("T")[0],
      allData.morningScheduled,
      allData.morningAttended,
      allData.afternoonScheduled,
      allData.afternoonAttended,
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
          return Number(item);
        }
      });
    });

    setIsLoading(true);
    sendValues(parsedValues);
  };

  return (
    <Container>
      {isLoading && (
        <LoaderCSS />
      )}
      <HeaderContainer>
        <HeaderText>Dados Diários - Dental Santé</HeaderText>
      </HeaderContainer>
      <FormContainer>
        <InputWrap mode="w-100">
          <Input type="date" required defaultValue={new Date().toISOString().split("T")[0]} />
          <Label>Data</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.morningScheduled} required onChange={ (e) => {
              setAllData({
                ...allData,
                morningScheduled: e.target.value, 
              })
            }
          }/>
          <Label>Agendados - Manhã</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.morningAttended} required onChange={ (e) => {
              setAllData({
                ...allData,
                morningAttended: e.target.value,
              })
            }
          }/>
          <Label>Compareceram - Manhã</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.afternoonScheduled} required onChange={ (e) => {
              setAllData({
                ...allData,
                afternoonScheduled: e.target.value,
              })
            }
          }/>
          <Label>Agendados - Tarde</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.afternoonAttended} required onChange={ (e) => {
              setAllData({
                ...allData,
                afternoonAttended: e.target.value,
              })
            }
          }/>
          <Label>Compareceram - Tarde</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.saleQuantity} required onChange={ (e) => {
              setAllData({
                ...allData,
                saleQuantity: e.target.value,
              })
            }
          }/>
          <Label>Venda - Quantidade</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.saleValue} required onChange={ (e) => {
              setAllData({
                ...allData,
                saleValue: e.target.value,
              })
            }
          }/>
          <Label>Venda - Valor</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.dayScheduling} required onChange={ (e) => {
              setAllData({
                ...allData,
                dayScheduling: e.target.value,
              })
            }
          }/>
          <Label>Agendamentos  - Dia</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.monthScheduling} required onChange={ (e) => {
              setAllData({
                ...allData,
                monthScheduling: e.target.value,
              })
            }
          }/>
          <Label>Agendamentos  - Mês</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.dayAttendance} required onChange={ (e) => {
              setAllData({
                ...allData,
                dayAttendance: e.target.value,
              })
            }
          }/>
          <Label>Comparecimento - Dia</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.monthAttendance} required onChange={ (e) => {
              setAllData({
                ...allData,
                monthAttendance: e.target.value,
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
          <Input type="number" value={allData.returnVanessa} required onChange={ (e) => {
              setAllData({
                ...allData,
                returnVanessa: e.target.value,
              })
            }
          }/>
          <Label>Retorno (Vanessa)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.followUp} required onChange={ (e) => {
              setAllData({
                ...allData,
                followUp: e.target.value,
              })
            }
          }/>
          <Label>Follow-up</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.firstTimeDila} required onChange={ (e) => {
              setAllData({
                ...allData,
                firstTimeDila: e.target.value,
              })
            }
          }/>
          <Label>Primeira vez (Dila)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.total} required onChange={ (e) => {
              setAllData({
                ...allData,
                total: e.target.value,
              })
            }
          }/>
          <Label>Total</Label>
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
          <Input type="number" value={allData.returnVanessaAccumulated} required onChange={ (e) => {
              setAllData({
                ...allData,
                returnVanessaAccumulated: e.target.value,
              })
            }
          }/>
          <Label>Retorno (Vanessa)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.followUpAccumulated} required onChange={ (e) => {
              setAllData({
                ...allData,
                followUpAccumulated: e.target.value,
              })
            }
          }/>
          <Label>Follow-up</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.firstTimeDilaAccumulated} required onChange={ (e) => {
              setAllData({
                ...allData,
                firstTimeDilaAccumulated: e.target.value,
              })
            }
          }/>
          <Label>Primeira vez (Dila)</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" value={allData.totalAccumulated} required onChange={ (e) => {
              setAllData({
                ...allData,
                totalAccumulated: e.target.value,
              })
            }
          }/>
          <Label>Total</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <hr />
          <HeaderText style={{
            "textAlign": "center",
            "width": "100%",
            "margin": "30px 0",
          }}>Caixa Acumulado</HeaderText>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="number" value={allData.cashAccumulated} required onChange={ (e) => {
              setAllData({
                ...allData,
                cashAccumulated: e.target.value,
              })
            }
          }/>
          <Label>Valor</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="submit" value="Enviar" onClick={handleSubmit} disabled={isDisabled}/>
        </InputWrap>

      </FormContainer>
    </Container>
  );
}

export default Home;