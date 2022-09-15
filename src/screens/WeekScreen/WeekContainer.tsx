import React, {useEffect} from "react";
import {getCurrentDate, selectCurrentDate, sortedDuties} from "../../store/dutiesSlice";
import { Week } from "./Week";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useParams} from "react-router-dom";

export const WeekContainer: React.FC = () => {

  const dutiesMap = useAppSelector(sortedDuties);
  const selectDate = useAppSelector(selectCurrentDate);
  const params = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {

    let month = Number(params.month)
    let year = Number(params.year)
    let day = Number(params.day)

    const date = new Date(year, month, day)

    dispatch(getCurrentDate(date))

  }, [])


  const numberOfDaysInCurrentMonth = new Date(
    selectDate.getFullYear(),
    selectDate.getMonth() + 1,
    0
  ).getDate();



  let daysInCurrentWeek: number[] = [];

    if (daysInCurrentWeek[daysInCurrentWeek.length - 1] + 7 > numberOfDaysInCurrentMonth) {

    for (let i = daysInCurrentWeek[0]; i <= numberOfDaysInCurrentMonth; i++) {
      daysInCurrentWeek.push(i);
    }
    } else {
    for (let i = selectDate.getDate() - selectDate.getDay(); i < selectDate.getDate() + selectDate.getDay() - 1; i++) {
      daysInCurrentWeek.push(i);
    }
  }




  console.log('Дата в селекторе: ' + selectDate.getDate())
  console.log('День в селекторе: ' + selectDate.getDay())
  console.log('Дни в массиве текущей недели: ' + daysInCurrentWeek)
  console.log('Количество дней в текущем месяце: ' +  numberOfDaysInCurrentMonth)
  console.log('Текущая дата: ' +  selectDate)
  console.log('Первый элемент массива текущей недели: ' + daysInCurrentWeek[0])
  console.log('Последний элемент массива текущей недели: ' + daysInCurrentWeek[daysInCurrentWeek.length - 1])





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
