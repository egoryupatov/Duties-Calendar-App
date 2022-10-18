import styled from "styled-components";

export const EngineersListStyled = styled.div``;

export const EngineersTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EngineersTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 22px;
  font-weight: 400;
  height: 10vh;
  padding: 10px;
  color: #3c4043;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

interface CellStyled {
  justify?: string;
}

export const Cell = styled.div<CellStyled>`
  display: flex;
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  border-bottom: #dadce0 1px solid;
  text-align: center;
  align-items: center;
  height: calc(85vh / 15);
  width: 100%;
  justify-content: ${(props) => props.justify || "start"};

  &:nth-child(1) {
    border-right: #dadce0 1px solid;
  }
`;

export const FirstRowCell = styled(Cell)`
  justify-content: center;
  align-items: center;
  color: #3c4043;
  font-weight: bold;
  height: 100%;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  color: #3c4043;
  font-weight: bold;
  height: 5vh;
`;
