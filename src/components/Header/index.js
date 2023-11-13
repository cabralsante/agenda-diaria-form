import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeaderText = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #000;
  text-decoration: underline;
  padding: 0 20px;
`;

export const HeaderImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  user-select: none;
  pointer-events: none;
`;