import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeCustomDateDisplay,
  changeStatsDisplay,
  getCurrentDate,
  selectCurrentDate,
  selectIsCustomDateActive,
  selectIsWeekDisplay,
} from "../../store/dutiesSlice";
import { getNumberOfDaysInCurrentMonth } from "../../utils/getNumberOfDaysInCurrentMonth";
import { Navbar } from "./Navbar";
import { getCurrentMonthNameShort } from "../../utils/getCurrentMonthNameShort";
import { getNextMonthNameShort } from "../../utils/getNextMonthNameShort";
import { getCurrentYearNumber } from "../../utils/getCurrentYearNumber";
import { getCurrentMonthNameLong } from "../../utils/getCurrentMonthNameLong";

export interface NavbarContainerProps {
  switchToPreviousPeriod: () => void;
  switchToNextPeriod: () => void;
  switchToWeekDisplay?: () => void;
  switchToMonthDisplay?: () => void;
}

export const NavbarContainer: React.FC<NavbarContainerProps> = (props) => {
  const weekScreenActive = useAppSelector(selectIsWeekDisplay);
  const isCustomDateActive = useAppSelector(selectIsCustomDateActive);
  const selectDate = useAppSelector(selectCurrentDate);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const nextMonthNameShort = getNextMonthNameShort(selectDate);
  const currentMonthNameShort = getCurrentMonthNameShort(selectDate);
  const currentMonthNameLong = getCurrentMonthNameLong(selectDate);
  const numberOfDaysInCurrentMonth = getNumberOfDaysInCurrentMonth(selectDate);
  const currentYearNumber = getCurrentYearNumber(selectDate);

  const switchStatsDisplay = () => {
    dispatch(changeStatsDisplay(true));
  };

  const customDateDisplay = () => {
    dispatch(changeCustomDateDisplay(true));
  };

  const nextMonth = () => {
    return new Date(
      selectDate.getFullYear(),
      selectDate.getMonth() + 1
    ).getMonth();
  };

  const prevMonth = () => {
    return new Date(
      selectDate.getFullYear(),
      selectDate.getMonth() - 1
    ).getMonth();
  };

  const nextWeek = () => {
    return new Date(
      selectDate.getFullYear(),
      selectDate.getMonth(),
      selectDate.getDate() + 7
    ).getDate();
  };

  const prevWeek = () => {
    return new Date(
      selectDate.getFullYear(),
      selectDate.getMonth() - 1,
      selectDate.getDate() - 7
    ).getDate();
  };

  const goHome = () => {
    dispatch(getCurrentDate(new Date()));
    navigate(
      `/month/${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`
    );
  };

  return (
    <Navbar
      currentMonthNameShort={currentMonthNameShort}
      currentMonthNameLong={currentMonthNameLong}
      currentYearNumber={currentYearNumber}
      nextMonthNameShort={nextMonthNameShort}
      numberOfDaysInCurrentMonth={numberOfDaysInCurrentMonth}
      selectDate={selectDate}
      weekScreenActive={weekScreenActive}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      nextWeek={nextWeek}
      prevWeek={prevWeek}
      switchToNextPeriod={props.switchToNextPeriod}
      switchToPreviousPeriod={props.switchToPreviousPeriod}
      isCustomDateActive={isCustomDateActive}
      customDateDisplay={customDateDisplay}
      goHome={goHome}
      switchStatsDisplay={switchStatsDisplay}
      switchToMonthDisplay={props.switchToMonthDisplay}
      switchToWeekDisplay={props.switchToWeekDisplay}
    />
  );
};
