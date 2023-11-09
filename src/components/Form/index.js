import styled from "styled-components";

export const FormContainer = styled.form.attrs({
  action: "/",
  method: "POST"
})`
  display: grid;
  margin-top: 2.55rem;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
  width: 70%;
  margin: 2.55rem auto 0;

  @media (max-width: 768px) {
    column-gap: 1rem;
    width: 90%;
  }
`;