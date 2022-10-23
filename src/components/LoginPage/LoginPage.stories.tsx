import React from "react";
import { LoginPage } from "./LoginPage";
import { action } from "@storybook/addon-actions";

export default {
  title: "LoginPage",
  component: LoginPage,
};

export const Default = () => {
  return (
    <LoginPage
      handleUserLogin={action("handleUserLogin")}
      handleUserPassword={action("handleUserPassword")}
      handleSubmit={action("handleSubmit")}
      wrongData={false}
    />
  );
};
