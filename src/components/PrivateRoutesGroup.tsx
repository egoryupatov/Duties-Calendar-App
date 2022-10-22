import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MonthScreen } from "../screens/MonthScreen/MonthScreen";
import { LoginPage } from "./LoginPage/LoginPage";

export const PrivateRoutesGroup = () => {
  const [isUserAuth, setIsAuth] = useState(false);

  const handleUserAuth = () => {
    setIsAuth(true);
  };

  if (!isUserAuth) {
    return <LoginPage handleUserAuth={handleUserAuth} />;
  }

  return (
    <Routes>
      <Route path=":year/:month/:day" element={<MonthScreen />} />
    </Routes>
  );
};
