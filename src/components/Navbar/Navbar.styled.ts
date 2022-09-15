import styled from "styled-components";

export const NavBarStyled = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  height:5vh;
  position: relative;
`

export const MonthNamesContainerStyled = styled.div`
  display:flex;
  font-weight: 400;
  font-size: 22px;
  align-items: center;
`

export const ButtonsContainerStyled = styled.div`
  display:flex;
  align-items: center;
`

export const DaysContainerStyled = styled.div`
  display:flex;
  border-top: #dadce0 1px solid;
  border-bottom: #dadce0 1px solid;
  height:3vh;
`
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
    background-color: #bbb;
    color: white;
    border: none;
  }
`;