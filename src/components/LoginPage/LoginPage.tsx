import React, { useState } from "react";
import {
  LoginPageContainerStyled,
  LoginPageWrapperStyled,
  LoginPageFormStyled,
  LoginPageInputStyled,
} from "./LoginPage.styled";
import { Button } from "../../styles/general.styled";

interface LoginPageProps {
  handleUserAuth: () => void;
}

export const LoginPage = (props: LoginPageProps) => {
  const admin = { login: "admin", password: "qwerty" };

  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [wrongData, setWrongData] = useState(false);

  const handleUserLogin = (event: any) => {
    setUserLogin(event.target.value);
  };

  const handleUserPassword = (event: any) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (userLogin === admin.login && userPassword === admin.password) {
      setWrongData(false);
      localStorage.setItem("token", "admin");
      props.handleUserAuth();
    } else {
      setWrongData(true);
    }
  };

  return (
    <LoginPageContainerStyled>
      <LoginPageWrapperStyled>
        <LoginPageFormStyled>
          Sign in to proceed:
          <LoginPageInputStyled
            type="text"
            name="login"
            placeholder="Login"
            onChange={handleUserLogin}
          ></LoginPageInputStyled>
          <LoginPageInputStyled
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleUserPassword}
          ></LoginPageInputStyled>
          <Button onClick={handleSubmit}>Login</Button>
        </LoginPageFormStyled>
        {wrongData ? (
          <div style={{ color: "red" }}>You entered the wrong data!</div>
        ) : (
          ""
        )}
      </LoginPageWrapperStyled>
    </LoginPageContainerStyled>
  );
};
