import React from "react";
import { Navbar } from "./Navbar";
import { action } from "@storybook/addon-actions";

export default {
  title: "Navbar",
  component: Navbar,
};

export const Default = () => {
  return {
    /*
    <Navbar
      weekScreenActive={false}
      numberOfDaysInCurrentMonth={30}
      selectDate={new Date()}
      currentMonthNameShort={"Oct"}
      currentMonthNameLong={"October"}
      nextMonthNameShort={"Nov"}
      currentYearNumber={"2022"}
      switchToNextPeriod={action("switchToNextPeriod")}
      switchToPreviousPeriod={action("switchToPreviousPeriod")}
      prevMonth={action("prevMonth")}
      nextMonth={action("nextMonth")}
      nextWeek={action("nextWeek")}
      prevWeek={action("prevWeek")}
      goHome={action("goHome")}
      customDateDisplay={action("customDateDisplay")}
      switchStatsDisplay={action("switchStatsDisplay")}
      isCustomDateActive={false}
    />
    */
  };
};
