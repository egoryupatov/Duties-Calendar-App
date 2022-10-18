import React from "react";
import { DutyCellStyled } from "../../styles/general.styled";

export interface DutyCellProps {
  day: number;
  text: string;
}

export const DutyCell: React.FC<DutyCellProps> = (props) => {
  return (
    <DutyCellStyled>
      <div data-testid="day">{props.day}</div>
      <div data-testid="name">{props.text}</div>
    </DutyCellStyled>
  );
};
