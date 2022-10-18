import React from "react";
import { StatsWrapper } from "./Stats.styled";
import { EngineersList } from "../EngineersList/EngineersList";

export const Stats: React.FC = (props) => {
  return (
    <StatsWrapper>
      <EngineersList />
    </StatsWrapper>
  );
};
