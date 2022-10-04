import React from "react";
import {StatsWrapper} from "./Stats.styled";
import { EngineersList } from "../EngineersList/EngineersList";

interface StatsProps {
  week: boolean;
}
export const Stats: React.FC<StatsProps> = (props) => {
  return (
    <StatsWrapper>

      <EngineersList />
    </StatsWrapper>
  );
};
