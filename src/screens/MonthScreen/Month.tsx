import React from "react";
import {Cell, CellOut, Row} from "../../styles/general.styled";
import { DutyCell } from "./DutyCell";
import { Duties } from "../../store/dutiesSlice";

interface MonthContainerProps {
  prevMonthDays: number[];
  currentMonthDays: number[];
  nextMonthDays: number[];
  dutiesMap: Record<number, Duties>;
}

export const Month: React.FC<MonthContainerProps> = (props) => {

  return (

    <Row>

      {props.prevMonthDays.map((prevMonthDay) => (
        <CellOut>{prevMonthDay}</CellOut>
      ))}

      {props.currentMonthDays.map((day: number) => {
        return props.dutiesMap[day] ? (
          <DutyCell text={props.dutiesMap[day]?.engineer.name} day={day}  />
        ) : (
          <Cell>{day}</Cell>
        );
      })}

      {props.nextMonthDays.map((nextMonthDay: number) => (
        <CellOut>{nextMonthDay}</CellOut>
      ))}
    </Row>
  );
};
