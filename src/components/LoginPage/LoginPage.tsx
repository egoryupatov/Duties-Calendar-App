import React from "react";
import {
  LoginPageContainerStyled,
  LoginPageWrapperStyled,
  LoginPageFormStyled,
  LoginPageInputStyled,
} from "./LoginPage.styled";
import { Button } from "../../styles/general.styled";

interface LoginPageProps {
  handleUserLogin: (event: any) => void;
  handleUserPassword: (event: any) => void;
  handleSubmit: () => void;
  wrongData: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <LoginPageContainerStyled>
      <LoginPageWrapperStyled>
        <LoginPageFormStyled>
          Sign in to proceed:
          <LoginPageInputStyled
            type="text"
            name="login"
            placeholder="Login"
            onChange={props.handleUserLogin}
          ></LoginPageInputStyled>
          <LoginPageInputStyled
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.handleUserPassword}
          ></LoginPageInputStyled>
          <Button onClick={props.handleSubmit}>Login</Button>
        </LoginPageFormStyled>
        {props.wrongData ? (
          <div style={{ color: "red" }}>You entered the wrong data!</div>
        ) : (
          ""
        )}
      </LoginPageWrapperStyled>
    </LoginPageContainerStyled>
  );
};
