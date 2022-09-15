import {getNumberOfDaysInCurrentMonth} from "./getNumberOfDaysInCurrentMonth";

export const getCurrentMonthDays = (date: Date):number[] => {

    const numberOfDaysInCurrentMonth = getNumberOfDaysInCurrentMonth(date)
    let currentMonthDays: number[] = [];

    for (let i = 1; i <= numberOfDaysInCurrentMonth; i++) {
        currentMonthDays.push(i);
    }

    return currentMonthDays

}