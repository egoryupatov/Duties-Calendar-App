import { getNumberOfDaysInCurrentMonth } from "./getNumberOfDaysInCurrentMonth";

export const getDaysInCurrentWeek = (selectDate: Date) => {
  const numberOfDaysInCurrentMonth = getNumberOfDaysInCurrentMonth(selectDate);
  let daysInCurrentWeek: number[] = [];
  const sunday = selectDate.getDate() - selectDate.getDay();

  if (sunday + 7 > numberOfDaysInCurrentMonth) {
    for (let i = sunday; i <= numberOfDaysInCurrentMonth; i++) {
      daysInCurrentWeek.push(i);
    }
  } else {
    for (
      let i = sunday;
      i < selectDate.getDate() + (7 - selectDate.getDay());
      i++
    ) {
      daysInCurrentWeek.push(i);
    }
  }

  return daysInCurrentWeek;
};
