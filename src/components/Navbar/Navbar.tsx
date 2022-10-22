import React from "react";
import {
  Arrow,
  ButtonsContainerStyled,
  MonthNamesContainerStyled,
  NavBarStyled,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import { Button } from "../../styles/general.styled";
import { CustomDateContainer } from "../CustomDate/CustomDateContainer";

export interface NavbarProps {
  weekScreenActive: boolean;
  numberOfDaysInCurrentMonth: number;
  selectDate: Date;
  currentMonthNameShort: string;
  currentMonthNameLong: string;
  nextMonthNameShort: string;
  currentYearNumber: string;
  switchToNextPeriod: () => void;
  switchToPreviousPeriod: () => void;
  prevMonth: () => number;
  nextMonth: () => number;
  nextWeek: () => number;
  prevWeek: () => number;
  goHome: () => void;
  customDateDisplay: () => void;
  switchToWeekDisplay?: () => void;
  switchToMonthDisplay?: () => void;
  switchStatsDisplay: () => void;
  isCustomDateActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <NavBarStyled>
      <MonthNamesContainerStyled>
        {props.weekScreenActive &&
        props.selectDate.getDate() + 7 > props.numberOfDaysInCurrentMonth ? (
          <div>
            {props.currentMonthNameShort +
              " - " +
              props.nextMonthNameShort +
              " " +
              props.currentYearNumber}
          </div>
        ) : (
          <>
            <div>Duties Calendar</div>
            <Button onClick={props.goHome}>Today</Button>

            <Link
              to={`/month/${props.selectDate.getFullYear()}/${props.prevMonth()}`}
            >
              <Arrow onClick={props.switchToPreviousPeriod}>{"<"}</Arrow>
            </Link>
            <Link
              to={`/month/${props.selectDate.getFullYear()}/${props.nextMonth()}`}
            >
              <Arrow onClick={props.switchToNextPeriod}>{">"}</Arrow>
            </Link>

            <div>
              {props.currentMonthNameLong + " " + props.currentYearNumber}
            </div>
          </>
        )}
      </MonthNamesContainerStyled>

      <ButtonsContainerStyled>
        {props.weekScreenActive ? (
          <>
            <Link
              to={`/week/${props.selectDate.getFullYear()}/${props.selectDate.getMonth()}/${props.prevWeek()}`}
            >
              <Arrow onClick={props.switchToPreviousPeriod}>{"<"}</Arrow>
            </Link>
            <Link
              to={`/week/${props.selectDate.getFullYear()}/${props.selectDate.getMonth()}/${props.nextWeek()}`}
            >
              <Arrow onClick={props.switchToNextPeriod}>{">"}</Arrow>
            </Link>
          </>
        ) : (
          <></>
        )}

        <Button onClick={props.customDateDisplay}>Set Custom Date</Button>
        <Button onClick={props.switchToWeekDisplay}>Week</Button>
        <Button onClick={props.switchToMonthDisplay}>Month</Button>
      </ButtonsContainerStyled>

      {props.isCustomDateActive ? <CustomDateContainer /> : ""}
    </NavBarStyled>
  );
};
