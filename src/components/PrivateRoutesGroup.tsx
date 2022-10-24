import React from "react";
import { Route, Routes } from "react-router-dom";
import { MonthScreen } from "../screens/MonthScreen/MonthScreen";
import { LoginPageContainer } from "./LoginPage/LoginPageContainer";

export const PrivateRoutesGroup = () => {
  const isUserAuthorized = localStorage.getItem("token");

  if (!isUserAuthorized) {
    return <LoginPageContainer />;
  }

  return (
    <Routes>
      <Route path=":year/:month/:day" element={<MonthScreen />} />
    </Routes>
  );
};
