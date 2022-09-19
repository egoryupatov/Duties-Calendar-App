import { getNumberOfDaysInCurrentMonth } from "./getNumberOfDaysInCurrentMonth";

export const getDaysInWeekOfNextMonth = (selectDate: Date): number[] => {

  const numberOfDaysInCurrentMonth = getNumberOfDaysInCurrentMonth(selectDate);
  const sunday = selectDate.getDate() - selectDate.getDay();

  let daysInWeekOfNextMonth: number[] = [];

  if (sunday + 7 > numberOfDaysInCurrentMonth) {
    for (let i = 1; i < 7 - (numberOfDaysInCurrentMonth - sunday); i++) {
      daysInWeekOfNextMonth.push(i);
    }
  }
  return daysInWeekOfNextMonth;
};
