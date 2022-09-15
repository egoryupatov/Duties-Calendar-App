import React from "react";
import {DutyCellStyled} from "../../styles/general.styled";

export interface DutyCellProps {
  day: number;
  text: string;
}

export const DutyCell: React.FC<DutyCellProps> = (props) => {
  return (
    <DutyCellStyled>
      <div>{props.day}</div>
      <div>{props.text}</div>
    </DutyCellStyled>
  );
};
