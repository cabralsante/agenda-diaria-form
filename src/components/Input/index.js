import styled from "styled-components";

export const InputWrap = styled.div`
  ${({ mode }) => mode === "w-100" && "grid-column: span 2;"};
  position: relative;
`;

export const Input = styled.input`

  ${({ type }) => type === "submit" && `
    background-color: #494BC1;
    width: 100%;
    padding: 1rem;
    color: #fff !important;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1.05rem;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 2px transparent;
    margin: 30px 0;

    &:hover {
      background-color: #2c2e78;
    }

    &:disabled {
      background-color: #e0e0e0;
      cursor: not-allowed;
    }
  ` || `
    width: 100%;
    padding: 1.5rem 1.35rem calc(0.75rem - 2px) 1.35rem;
    border-radius: 20px;
    font-family: inherit;
    color: #000;
    font-weight: 600;
    outline: none;
    border: none;
    background-color: #e0e0e0;
    font-size: 0.95rem;
    transition: all 0.3s ease-in-out;
    color: transparent;

    &:hover {
      background-color: #c7c7c7;
      box-shadow: none;
    }

    &:focus {
      background-color: #fff;
      box-shadow: 0 0 0 2px #494BC1;
    }

    &:focus ~ label, &:valid ~ label {
      font-size: .66rem;
      top: 0.60rem;
      transform: translateY(0);
    }

    &:focus ~ label {
      color: #494BC1;
    }

    &:focus, &:valid {
      color: #000;
    }

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `};
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: calc(1.35rem - 1px);
  transform: translateY(-50%);
  color: #616161;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
`;