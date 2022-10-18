import React from "react";
import {
  CalendarBodyStyled,
  WeekCell,
  WeekOut,
  WeekCellDuty,
} from "../../styles/general.styled";
import { Duties } from "../../store/dutiesSlice";
import {
  DaysCell,
  DaysContainerStyled,
} from "../../components/Navbar/Navbar.styled";
import { dayNames } from "../../constants/dayNames";
import { BodyContainerStyled } from "../../components/Navbar/Navbar.styled";

interface WeekContainerProps {
  daysInCurrentWeek: number[];
  dutiesMap: Record<number, Duties>;
  numberOfDaysInCurrentMonth: number;
  daysInWeekOfNextMonth: number[];
  selectDate: Date;
}

export const Week: React.FC<WeekContainerProps> = (props) => {
  return (
    <BodyContainerStyled>
      <DaysContainerStyled>
        {dayNames.map((dayName: string) => (
          <DaysCell>{dayName}</DaysCell>
        ))}
      </DaysContainerStyled>
      <CalendarBodyStyled>
        {props.daysInCurrentWeek.map((day: number) => {
          return props.dutiesMap[day] ? (
            <WeekCellDuty>
              <div>{day}</div>
              <div>{props.dutiesMap[day]?.engineer.name}</div>
            </WeekCellDuty>
          ) : (
            <WeekCell>{day}</WeekCell>
          );
        })}

        {props.daysInCurrentWeek[0] + 7 > props.numberOfDaysInCurrentMonth ? (
          <>
            {props.daysInWeekOfNextMonth.map((nextWeekDay: number) => (
              <WeekOut>{nextWeekDay}</WeekOut>
            ))}
          </>
        ) : (
          <></>
        )}
      </CalendarBodyStyled>
    </BodyContainerStyled>
  );
};
