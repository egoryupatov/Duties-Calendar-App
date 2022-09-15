import styled from "styled-components";

export const EngineersListStyled = styled.div`
  border-top: #dadce0 1px solid;
`;

export const EngineersTable = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const EngineersTableHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  justify-content: space-between;
  background-color: white;
  font-size: 22px;
  font-weight: 400;
  padding: 0px 0px 0px 20px;
  border-right: #dadce0 1px solid;
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
  padding: 10px 20px 10px 20px;
  font-weight: 500;
  font-size: 16px;
  border-bottom: #dadce0 1px solid;
  border-right: #dadce0 1px solid;
  width: 100%;
  justify-content: ${(props) => props.justify || "start"};
`;

export const FirstRow = styled.div`
  display: flex;
  border-bottom: #dadce0 1px solid;
  padding: 10px 20px 10px 20px;
  justify-content: space-between;
  font-weight: bold;
  height:3vh;
`;
