import React from "react";
import { selectCurrentDate, sortedDuties} from "../../store/dutiesSlice";
import { Week } from "./Week";
import {useAppSelector} from "../../store/hooks";
import {useSetDateFromUrl} from "../../utils/useSetDateFromUrl";
import {getDaysInCurrentWeek} from "../../utils/getDaysInCurrentWeek";

export const WeekContainer: React.FC = () => {

  const dutiesMap = useAppSelector(sortedDuties);
  const selectDate = useAppSelector(selectCurrentDate);
  const daysInCurrentWeek = getDaysInCurrentWeek(selectDate)

  useSetDateFromUrl();

  const numberOfDaysInCurrentMonth = new Date(
    selectDate.getFullYear(),
    selectDate.getMonth() + 1,
    0
  ).getDate();


  console.log('Дата в селекторе: ' + selectDate.getDate())
  console.log('День в селекторе: ' + selectDate.getDay())
  console.log('Дни в текущей неделе: ' + daysInCurrentWeek)





  let daysInWeekOfNextMonth: number[] = [];

  if (daysInCurrentWeek[daysInCurrentWeek.length - 1] + 7 > numberOfDaysInCurrentMonth) {
    for (let i = 1; i < 7 - (numberOfDaysInCurrentMonth - selectDate.getDate()); i++) {
      daysInWeekOfNextMonth.push(i);
    }
  }




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
