import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { getCurrentDate } from "../../store/dutiesSlice";
import { useNavigate } from "react-router-dom";
import { CustomDate } from "./CustomDate";

export const CustomDateContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const years = [];
  const month = [];

  for (let i = 1; i <= 12; i++) {
    month.push(i);
  }

  for (let i = 2020; i <= 2022; i++) {
    years.unshift(i);
  }

  interface dateState {
    chosenYear: number;
    chosenMonth: number;
  }

  const [date, setDate] = useState<dateState>({
    chosenYear: new Date().getFullYear(),
    chosenMonth: new Date().getMonth(),
  });

  const onSubmit = () => {
    dispatch(getCurrentDate(new Date(date.chosenYear, date.chosenMonth)));

    const goToPage = () =>
        navigate(`/month/${date.chosenYear}/${date.chosenMonth}`);

    goToPage();
  };

  const handleYearChange = (e: any) => {
    setDate({ chosenYear: e.target.value, chosenMonth: date.chosenMonth });
  };

  const handleMonthChange = (e: any) => {
    setDate({ chosenYear: date.chosenYear, chosenMonth: e.target.value });
  };

  return (
      <CustomDate
          onSubmit={onSubmit}
          handleYearChange={handleYearChange}
          handleMonthChange={handleMonthChange}
          years={years}
          month={month}
      />
  );
};