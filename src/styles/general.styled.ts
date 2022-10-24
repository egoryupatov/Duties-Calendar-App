import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  width: 100%;
  height: 100%;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom: #dadce0 1px solid;
`;

export const BodyStyled = styled.div`
  display: flex;
  background: white;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: 1px solid #dadce0;
  -moz-border-radius: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 600;
  color: #3c4043;
  align-items: center;
  height: 36px;
  padding: 10px;
  margin: 0px 5px 0px 5px;
  justify-content: center;
  transition: background-color 100ms linear;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f4;
  }
`;

export const CalendarBodyStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: #dadce0 1px solid;
  height: 100%;
  width: 100%;
`;

export const Cell = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% / 7);
  padding: 20px 0px 0px 20px;
  border-right: #dadce0 1px solid;
  border-bottom: #dadce0 1px solid;
  color: #3c4043;
  font-weight: 500;
  font-size: 14px;
`;

export const DutyCellStyled = styled(Cell)`
  background-color: #f7fff0;
  flex-direction: column;
  height: auto;
`;

export const CellOut = styled(Cell)`
  color: #cacaca;
  height: auto;
`;

export const WeekCell = styled.div`
  display: flex;
  width: calc(100% / 7);
  padding: 20px 0px 0px 20px;
  border-right: #dadce0 1px solid;
  border-bottom: #dadce0 1px solid;
  overflow: hidden;
  color: #3c4043;
  font-weight: 500;
  font-size: 16px;
  min-height: 400px;
  flex-direction: column;
`;

export const WeekCellDuty = styled(WeekCell)`
  background-color: #f7fff0;
`;

export const WeekOut = styled(WeekCell)`
  color: #cacaca;
`;
