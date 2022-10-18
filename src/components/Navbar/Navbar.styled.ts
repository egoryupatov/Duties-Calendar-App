import styled from "styled-components";

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 10vh;
  position: relative;
`;

export const MonthNamesContainerStyled = styled.div`
  display: flex;
  font-weight: 400;
  color: #3c4043;
  font-size: 22px;
  align-items: center;
  gap: 5px;
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const DaysContainerStyled = styled.div`
  display: flex;
  border-bottom: #dadce0 1px solid;
  color: #3c4043;
  height: 5vh;
  font-size: 14px;
  align-items: center;
`;

export const BodyContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const DaysCell = styled.div`
  display: flex;
  width: calc(100% / 7);
  padding: 10px 0px 10px 20px;
  font-weight: bold;
`;

export const Arrow = styled.button`
  font-size: 15px;
  padding: 5px;
  color: #70757a;
  height: 35px;
  width: 35px;
  display: inline-block;
  border: none;
  background-color: white;

  &:hover {
    background-color: #f6f6f6;
    border-radius: 20px;
    border: none;
    transition: background-color, opacity 100ms linear;
  }
`;
