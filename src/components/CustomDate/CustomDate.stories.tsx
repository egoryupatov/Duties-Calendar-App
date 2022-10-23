import React from "react";
import { CustomDate } from "./CustomDate";
import { action } from "@storybook/addon-actions";

export default {
  title: "CustomDate",
  component: CustomDate,
};

export const Default = () => {
  return (
    <CustomDate
      onSubmit={action("onClick")}
      handleYearChange={action("handleYearChange")}
      handleMonthChange={action("handleMonthChange")}
      years={[2021, 2022, 2023]}
      month={[1, 2, 3, 4, 5]}
    />
  );
};
