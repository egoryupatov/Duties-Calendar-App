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

interface NumberOfDuties {
  name: string;
  days: number;
}

interface EngineersListProps {
  weekScreenActive: boolean;
  numberOfDuties: NumberOfDuties[];
}

export const EngineersList: React.FC<EngineersListProps> = (props) => {
  return (
    <EngineersListStyled>
      <EngineersTable>
        <FirstRow>
          <FirstRowCell>ENGINEER</FirstRowCell>
          <FirstRowCell>DUTIES</FirstRowCell>
        </FirstRow>

        {props.weekScreenActive
          ? props.numberOfDuties.map((elem: { days: number; name: string }) => (
              <Row key={elem.name}>
                <Cell>{elem.name}</Cell>
                <Cell justify={"center"}>{elem.days}</Cell>
              </Row>
            ))
          : props.numberOfDuties.map((elem: { days: number; name: string }) => (
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
