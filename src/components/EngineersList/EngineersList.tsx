import React from "react";
import {
  EngineersListStyled,
  EngineersTable,
  Cell,
  Row,
  FirstRow,
  FirstRowCell,
} from "./EngineersList.styled";
import { useAppSelector } from "../../store/hooks";
import { selectDuties, selectIsWeekDisplay } from "../../store/dutiesSlice";

export const EngineersList: React.FC = () => {
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

  const numberOfDuties = Object.entries(engineersDuty).map((entry) => ({
    name: entry[0],
    days: Number(entry[1]),
  }));

  return (
    <EngineersListStyled>
      <EngineersTable>
        <FirstRow>
          <FirstRowCell>ENGINEER</FirstRowCell>
          <FirstRowCell>DUTIES</FirstRowCell>
        </FirstRow>

        {weekScreenActive
          ? numberOfDuties.map((elem: { days: number; name: string }) => (
              <Row key={elem.name}>
                <Cell>{elem.name}</Cell>
                <Cell justify={"center"}>{elem.days}</Cell>
              </Row>
            ))
          : numberOfDuties.map((elem: { days: number; name: string }) => (
              <Row key={elem.name}>
                <Cell>
                  <div>{elem.name}</div>
                </Cell>
                <Cell justify={"center"}>{elem.days}</Cell>
              </Row>
            ))}
      </EngineersTable>
    </EngineersListStyled>
  );
};
