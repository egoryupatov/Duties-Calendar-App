import React, { useEffect } from "react";
import { NavbarContainer } from "../../components/Navbar/NavbarContainer";
import {
  DaysCell,
  DaysContainerStyled,
} from "../../components/Navbar/Navbar.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCurrentDate,
  getCurrentDate,
  getDuties,
  selectIsStatsDisplay,
  selectIsWeekDisplay,
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
import { Stats } from "../../components/Stats/Stats";
import { getDutiesListApi } from "../../api/api";
import { dayNames } from "../../constants/dayNames";

export const WeekScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectDate = useAppSelector(selectCurrentDate);
  const statsActive = useAppSelector(selectIsStatsDisplay);
  const weekScreenActive = useAppSelector(selectIsWeekDisplay);
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
    navigate(`/month/${selectDate.getFullYear()}/${selectDate.getMonth()}`)
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

          <DaysContainerStyled>
            {dayNames.map((dayName: string) => (
              <DaysCell>{dayName}</DaysCell>
            ))}
          </DaysContainerStyled>
        </HeaderStyled>

        <BodyStyled>
          <WeekContainer />
        </BodyStyled>

        {statsActive ? <Stats week={weekScreenActive} /> : ""}
      </WrapperStyled>
    </ContainerStyled>
  );
};
