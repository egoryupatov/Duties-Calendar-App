import React from "react";
import { DutyCell } from "./DutyCell";

export default {
  title: "DutyCell",
  component: DutyCell,
};

export const Default = () => {
  return <DutyCell day={2} text={"Sergey Nekrasov"} />;
};
