import React from "react";
import {selectCurrentDate, sortedDuties} from "../../store/dutiesSlice";
import { Month } from "./Month";
import {useAppSelector} from "../../store/hooks";
import {useSetDateFromUrl} from "../../utils/useSetDateFromUrl";
import {getCurrentMonthDays} from "../../utils/getCurrentMonthDays";

export const MonthContainer: React.FC = () => {

  const dutiesMap = useAppSelector(sortedDuties)
  const selectDate = useAppSelector(selectCurrentDate)
  const currentMonthDays = getCurrentMonthDays(selectDate)

  useSetDateFromUrl();

  const getCurrentDayNumber = new Date(
      selectDate.getFullYear(),
      selectDate.getMonth()
  ).getDay();

  const numberOfDaysInPreviousMonth = new Date(
      selectDate.getFullYear(),
      selectDate.getMonth(),
      0
  ).getDate();

  const numberOfDaysInNextMonth = new Date(
      selectDate.getFullYear(),
      selectDate.getMonth() + 1,
      0
  ).getDay();

  let prevMonthDays = [];

  for (let i = 0; i < getCurrentDayNumber; i++) {
    prevMonthDays.unshift(numberOfDaysInPreviousMonth - i);
  }

  let nextMonthDays = [];

  for (let i = 0; i < 6 - numberOfDaysInNextMonth; i++) {
    nextMonthDays.push(i + 1);
  }

  return (



      <Month
          prevMonthDays={prevMonthDays}
          currentMonthDays={currentMonthDays}
          nextMonthDays={nextMonthDays}
          dutiesMap={dutiesMap}
      />

  );
};