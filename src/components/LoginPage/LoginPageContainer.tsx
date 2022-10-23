import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPage } from "./LoginPage";

export const LoginPageContainer = () => {
  const admin = { login: "admin", password: "qwerty" };

  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [wrongData, setWrongData] = useState(false);
  const navigate = useNavigate();

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
      navigate("/");
    } else {
      setWrongData(true);
    }
  };

  return (
    <LoginPage
      handleUserLogin={handleUserLogin}
      handleUserPassword={handleUserPassword}
      handleSubmit={handleSubmit}
      wrongData={wrongData}
    />
  );
};
