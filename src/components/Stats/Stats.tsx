import React from "react";
import {StatsWrapper} from "./Stats.styled";
import { EngineersList } from "../EngineersList/EngineersList";
import { EngineersTableHeader } from "../EngineersList/EngineersList.styled";

interface StatsProps {
  week: boolean;
}
export const Stats: React.FC<StatsProps> = (props) => {
  return (
    <StatsWrapper>
      <EngineersTableHeader>
        <p>Who was on duty this {props.week ? "week:" : "month:"}</p>
      </EngineersTableHeader>
      <EngineersList />
    </StatsWrapper>
  );
};
