import styled from "styled-components";

export const LoginPageContainerStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #e8e8e8;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const LoginPageWrapperStyled = styled.div`
  display: flex;
  width: 20vw;
  height: 30vh;
  background: white;
  border: #dadce0 1px solid;
  border-radius: 10px;
  flex-direction: column;
  gap: 20%;
`;

export const LoginPageFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
  gap: 10px;
`;

export const LoginPageInputStyled = styled.input`
  height: 36px;
  width: 100%;
  border: #dadce0 1px solid;
  border-radius: 5px;
  padding: 10px;
`;
