import React from "react";
import {Cell, CellOut, CalendarBodyStyled} from "../../styles/general.styled";
import { DutyCell } from "./DutyCell";
import { Duties } from "../../store/dutiesSlice";
import {DaysCell, DaysContainerStyled} from "../../components/Navbar/Navbar.styled";
import {dayNames} from "../../constants/dayNames";
import {BodyContainerStyled} from "../../components/Navbar/Navbar.styled";

export interface MonthContainerProps {
  prevMonthDays: number[];
  currentMonthDays: number[];
  nextMonthDays: number[];
  dutiesMap: Record<number, Duties>;
}

export const Month: React.FC<MonthContainerProps> = (props) => {

  return (

<BodyContainerStyled>

      <DaysContainerStyled>
        {dayNames.map((dayName: string) => (
            <DaysCell>{dayName}</DaysCell>
        ))}
      </DaysContainerStyled>

    <CalendarBodyStyled>

      {props.prevMonthDays.map((prevMonthDay) => (
        <CellOut key={prevMonthDay}>{prevMonthDay}</CellOut>
      ))}

      {props.currentMonthDays.map((day: number) => {
        return props.dutiesMap[day] ? (
          <DutyCell key={day} text={props.dutiesMap[day]?.engineer.name} day={day}  />
        ) : (
          <Cell key={day}>{day}</Cell>
        );
      })}

      {props.nextMonthDays.map((nextMonthDay: number) => (
        <CellOut key={nextMonthDay}>{nextMonthDay}</CellOut>
      ))}
    </CalendarBodyStyled>
</BodyContainerStyled>
  );
};
