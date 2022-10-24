import React from "react";
import { Route, Routes } from "react-router-dom";
import { MonthScreen } from "../screens/MonthScreen/MonthScreen";
import { LoginPageContainer } from "./LoginPage/LoginPageContainer";
import { WeekScreen } from "../screens/WeekScreen/WeekScreen";

export const PrivateRoutesGroup = () => {
  const isUserAuthorized = localStorage.getItem("token");

  if (!isUserAuthorized) {
    return <LoginPageContainer />;
  }

  return (
    <Routes>
      <Route path=":year/:month/:day" element={<MonthScreen />} />
      <Route path=":year/:month/:day" element={<WeekScreen />} />
    </Routes>
  );
};
