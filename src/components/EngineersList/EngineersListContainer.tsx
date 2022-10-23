import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectDuties, selectIsWeekDisplay } from "../../store/dutiesSlice";
import { EngineersList } from "./EngineersList";
import { EngineerListWrapper } from "./EngineersList.styled";

export const EngineersListContainer = () => {
  const selector = useAppSelector(selectDuties);
  const weekScreenActive = useAppSelector(selectIsWeekDisplay);
  const engineersDuty: any = {};
  let engineerNames: string[] = [];

  selector.map((elem) => engineerNames.push(elem.engineer.name));

  selector.forEach((elem, i) => {
    let dutyDays = 0;

    for (let i = 0; i < selector.length; i++) {
      if (elem.engineer.name === engineerNames[i]) {
        dutyDays += 1;
      }
    }
    engineersDuty[elem.engineer.name] = dutyDays;
  });

  const numberOfDuties = Object.entries(engineersDuty).map((entry: any) => ({
    name: entry[0],
    days: Number(entry[1]),
  }));

  return (
    <EngineerListWrapper>
      <EngineersList
        weekScreenActive={weekScreenActive}
        numberOfDuties={numberOfDuties}
      />
    </EngineerListWrapper>
  );
};
