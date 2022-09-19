import React from "react";
import { selectCurrentDate, sortedDuties } from "../../store/dutiesSlice";
import { Week } from "./Week";
import { useAppSelector } from "../../store/hooks";
import { useSetDateFromUrl } from "../../utils/useSetDateFromUrl";
import { getDaysInCurrentWeek } from "../../utils/getDaysInCurrentWeek";
import { getDaysInWeekOfNextMonth } from "../../utils/getDaysInWeekOfNextMonth";
import { getNumberOfDaysInCurrentMonth } from "../../utils/getNumberOfDaysInCurrentMonth";

export const WeekContainer: React.FC = () => {

  const dutiesMap = useAppSelector(sortedDuties);
  const selectDate = useAppSelector(selectCurrentDate);
  const daysInCurrentWeek = getDaysInCurrentWeek(selectDate);
  const daysInWeekOfNextMonth = getDaysInWeekOfNextMonth(selectDate);
  const numberOfDaysInCurrentMonth = getNumberOfDaysInCurrentMonth(selectDate);

  useSetDateFromUrl();

  return (
    <Week
      selectDate={selectDate}
      daysInCurrentWeek={daysInCurrentWeek}
      numberOfDaysInCurrentMonth={numberOfDaysInCurrentMonth}
      daysInWeekOfNextMonth={daysInWeekOfNextMonth}
      dutiesMap={dutiesMap}
    />
  );
};
