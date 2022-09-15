import React, {useEffect} from "react";
import {selectCurrentDate, sortedDuties} from "../../store/dutiesSlice";
import { Month } from "./Month";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useParams} from "react-router-dom";
import {getCurrentDate} from "../../store/dutiesSlice";

export const MonthContainer: React.FC = () => {

  const dutiesMap = useAppSelector(sortedDuties)
  const selectDate = useAppSelector(selectCurrentDate)
  const params = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {

    let month = Number(params.month)
    let year = Number(params.year)
    let day = Number(params.day)

    const date = new Date(year, month, day)

    dispatch(getCurrentDate(date))

  }, [])

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

  const numberOfDaysInCurrentMonth = new Date(
      selectDate.getFullYear(),
      selectDate.getMonth() + 1,
      0
  ).getDate();

  let currentMonthDays: number[] = [];

  for (let i = 1; i <= numberOfDaysInCurrentMonth; i++) {
    currentMonthDays.push(i);
  }

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