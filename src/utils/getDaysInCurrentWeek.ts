import { getNumberOfDaysInCurrentMonth } from "./getNumberOfDaysInCurrentMonth";

export const getDaysInCurrentWeek = (selectDate:Date) => {

  const numberOfDaysInCurrentMonth = getNumberOfDaysInCurrentMonth(selectDate);

  let daysInCurrentWeek: number[] = [];

  if (
    daysInCurrentWeek[daysInCurrentWeek.length - 1] + 7 >
    numberOfDaysInCurrentMonth
  ) {
    for (let i = daysInCurrentWeek[0]; i <= numberOfDaysInCurrentMonth; i++) {
      daysInCurrentWeek.push(i);
    }
  } else {
    for (
      let i = selectDate.getDate() - selectDate.getDay();
      i < selectDate.getDate() + (7 - selectDate.getDay());
      i++
    ) {
      daysInCurrentWeek.push(i);
    }
  }

  return daysInCurrentWeek;

};
