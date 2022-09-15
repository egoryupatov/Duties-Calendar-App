import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeCalendarDisplay,
  selectCurrentDate,
  getCurrentDate,
  getDuties,
  selectIsStatsDisplay,
  selectIsWeekDisplay,
} from "../../store/dutiesSlice";
import { NavbarContainer } from "../../components/Navbar/NavbarContainer";
import {
  DaysCell,
  DaysContainerStyled,
} from "../../components/Navbar/Navbar.styled";
import { MonthContainer } from "./MonthContainer";
import { useNavigate } from "react-router-dom";
import {
  ContainerStyled,
  WrapperStyled,
  BodyStyled,
  HeaderStyled,
} from "../../styles/general.styled";
import { Stats } from "../../components/Stats/Stats";
import { dayNames } from "../../constants/dayNames";
import { getDutiesListApi } from "../../api/api";

export const MonthScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectDate = useAppSelector(selectCurrentDate);
  const statsActive = useAppSelector(selectIsStatsDisplay);
  const isWeekScreenActive = useAppSelector(selectIsWeekDisplay);
  const navigate = useNavigate();

  useEffect(() => {
    getDutiesListApi(selectDate).then((data) => {
      dispatch(getDuties(data));
    });
  }, [selectDate]);

  const switchToNextMonth = () => {
    dispatch(
      getCurrentDate(
        new Date(selectDate.getFullYear(), selectDate.getMonth() + 1)
      )
    );
  };

  const switchToPreviousMonth = () => {
    dispatch(
      getCurrentDate(
        new Date(selectDate.getFullYear(), selectDate.getMonth() - 1)
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

          <DaysContainerStyled>
            {dayNames.map((dayName: string) => (
              <DaysCell>{dayName}</DaysCell>
            ))}
          </DaysContainerStyled>
        </HeaderStyled>

        <BodyStyled>
          <MonthContainer />
        </BodyStyled>
      </WrapperStyled>
      {statsActive ? <Stats week={isWeekScreenActive} /> : ""}
    </ContainerStyled>
  );
};
