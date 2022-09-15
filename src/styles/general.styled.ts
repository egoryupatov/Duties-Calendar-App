import styled from "styled-components";

export const ContainerStyled = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
`

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  width: 100%;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: #dadce0 1px solid;
`;

export const BodyStyled = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #dadce0;
  -moz-border-radius: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  height: 36px;
  padding:10px;
  margin: 0px 5px 0px 5px;
  font-weight: 500;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: #dadce0 1px solid;
  height: 92vh;
`;

export const Cell = styled.div`
  display: flex;
  width: calc(100% / 7);
  padding: 20px 0px 0px 20px;
  border-right: #dadce0 1px solid;
  border-bottom: #dadce0 1px solid;
  color: #3c4043;
  font-weight: 500;
  font-size: 16px;
`;

export const DutyCellStyled = styled(Cell)`
  background-color: #f7fff0;
  flex-direction: column;
`;

export const CellOut = styled(Cell)`
  color: #cacaca;
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