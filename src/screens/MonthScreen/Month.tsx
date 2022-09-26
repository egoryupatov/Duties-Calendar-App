import React from "react";
import {Cell, CellOut, Row} from "../../styles/general.styled";
import { DutyCell } from "./DutyCell";
import { Duties } from "../../store/dutiesSlice";

export interface MonthContainerProps {
  prevMonthDays: number[];
  currentMonthDays: number[];
  nextMonthDays: number[];
  dutiesMap: Record<number, Duties>;
}

export const Month: React.FC<MonthContainerProps> = (props) => {

  return (

    <Row>

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
    </Row>
  );
};
