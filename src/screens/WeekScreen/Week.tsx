import React from "react";
import {
  Row,
  WeekCell,
  WeekOut,
  WeekCellDuty,
} from "../../styles/general.styled";
import { Duties } from "../../store/dutiesSlice";

interface WeekContainerProps {
  daysInCurrentWeek: number[];
  dutiesMap: Record<number, Duties>;
  numberOfDaysInCurrentMonth: number;
  daysInWeekOfNextMonth: number[];
  selectDate: Date;
}

export const Week: React.FC<WeekContainerProps> = (props) => {
  return (
    <Row>

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
    </Row>
  );
};
