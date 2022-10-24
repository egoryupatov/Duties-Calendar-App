import React, { useEffect } from "react";
import { NavbarContainer } from "../../components/Navbar/NavbarContainer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCurrentDate,
  getCurrentDate,
  getDuties,
} from "../../store/dutiesSlice";
import { useNavigate } from "react-router-dom";
import { WeekContainer } from "./WeekContainer";
import { changeCalendarDisplay } from "../../store/dutiesSlice";
import {
  ContainerStyled,
  WrapperStyled,
  BodyStyled,
  HeaderStyled,
} from "../../styles/general.styled";
import { getDutiesListApi } from "../../api/api";
import { EngineersListContainer } from "../../components/EngineersList/EngineersListContainer";

export const WeekScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectDate = useAppSelector(selectCurrentDate);
  const navigate = useNavigate();

  useEffect(() => {
    getDutiesListApi(selectDate).then((data) => {
      dispatch(getDuties(data));
    });
  }, [selectDate]);

  const switchToNextWeek = () => {
    dispatch(
      getCurrentDate(
        new Date(
          selectDate.getFullYear(),
          selectDate.getMonth(),
          selectDate.getDate() + 7
        )
      )
    );
  };

  const switchToPreviousWeek = () => {
    dispatch(
      getCurrentDate(
        new Date(
          selectDate.getFullYear(),
          selectDate.getMonth(),
          selectDate.getDate() - 7
        )
      )
    );
  };

  const switchToMonthDisplay = () => {
    dispatch(changeCalendarDisplay(false));
    navigate(
      `/month/${selectDate.getFullYear()}/${selectDate.getMonth()}/${selectDate.getDate()}`
    );
  };

  return (
    <ContainerStyled>
      <WrapperStyled>
        <HeaderStyled>
          <NavbarContainer
            switchToPreviousPeriod={switchToPreviousWeek}
            switchToNextPeriod={switchToNextWeek}
            switchToMonthDisplay={switchToMonthDisplay}
          />
        </HeaderStyled>

        <BodyStyled>
          <EngineersListContainer />
          <WeekContainer />
        </BodyStyled>
      </WrapperStyled>
    </ContainerStyled>
  );
};
