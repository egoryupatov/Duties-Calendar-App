import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeCalendarDisplay,
  selectCurrentDate,
  getCurrentDate,
  getDuties,
} from "../../store/dutiesSlice";
import { NavbarContainer } from "../../components/Navbar/NavbarContainer";
import { MonthContainer } from "./MonthContainer";
import { useNavigate } from "react-router-dom";
import {
  ContainerStyled,
  WrapperStyled,
  BodyStyled,
  HeaderStyled,
} from "../../styles/general.styled";
import { getDutiesListApi } from "../../api/api";
import { EngineersListContainer } from "../../components/EngineersList/EngineersListContainer";

export const MonthScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectDate = useAppSelector(selectCurrentDate);
  const navigate = useNavigate();

  useEffect(() => {
    getDutiesListApi(selectDate).then((data) => {
      dispatch(getDuties(data));
    });
  }, [selectDate]);

  const switchToNextMonth = () => {
    dispatch(
      getCurrentDate(
        new Date(
          selectDate.getFullYear(),
          selectDate.getMonth() + 1,
          selectDate.getDate()
        )
      )
    );
  };

  const switchToPreviousMonth = () => {
    dispatch(
      getCurrentDate(
        new Date(
          selectDate.getFullYear(),
          selectDate.getMonth() - 1,
          selectDate.getDate()
        )
      )
    );
  };

  const switchToWeekDisplay = () => {
    dispatch(changeCalendarDisplay(true));
    navigate(
      `/week/${selectDate.getFullYear()}/${selectDate.getMonth()}/${selectDate.getDate()}`
    );
  };

  return (
    <ContainerStyled>
      <WrapperStyled>
        <HeaderStyled>
          <NavbarContainer
            switchToPreviousPeriod={switchToPreviousMonth}
            switchToNextPeriod={switchToNextMonth}
            switchToWeekDisplay={switchToWeekDisplay}
          />
        </HeaderStyled>

        <BodyStyled>
          <EngineersListContainer />

          <MonthContainer />
        </BodyStyled>
      </WrapperStyled>
    </ContainerStyled>
  );
};
