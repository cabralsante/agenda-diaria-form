import styled from "styled-components";
import { HeaderContainer, HeaderText } from "../components/Header";
import { FormContainer } from "../components/Form";
import { Input, InputWrap, Label } from "../components/Input";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

function Home() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Dados Diários - Dental Santé</HeaderText>
      </HeaderContainer>
      <FormContainer>
        <InputWrap mode="w-100">
          <Input type="date" required/>
          <Label>Data</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" required/>
          <Label>Agendados - Manhã</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" required/>
          <Label>Compareceram - Manhã</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" required/>
          <Label>Agendados - Tarde</Label>
        </InputWrap>

        <InputWrap>
          <Input type="number" required/>
          <Label>Compareceram - Tarde</Label>
        </InputWrap>

        <InputWrap mode="w-100">
          <Input type="submit" value="Enviar"/>
        </InputWrap>

      </FormContainer>
    </Container>
  );
}

export default Home;