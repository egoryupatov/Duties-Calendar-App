import React from "react";
import { Route, Routes } from "react-router-dom";
import { MonthScreen } from "../screens/MonthScreen/MonthScreen";
import { LoginPage } from "./LoginPage/LoginPage";

export const PrivateRoutesGroup = () => {
  const isUserAuthorized = localStorage.getItem("token");

  if (!isUserAuthorized) {
    return <LoginPage />;
  }

  return (
    <Routes>
      <Route path=":year/:month/:day" element={<MonthScreen />} />
    </Routes>
  );
};
