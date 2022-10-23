import React from "react";
import { Month } from "./Month";

export default {
  title: "Month",
  component: Month,
};

export const Default = () => {
  return (
    <Month
      prevMonthDays={[1, 2, 3]}
      currentMonthDays={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      nextMonthDays={[1, 2, 3]}
      dutiesMap={[]}
    />
  );
};
