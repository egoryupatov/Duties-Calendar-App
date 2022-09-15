export const getNumberOfDaysInCurrentMonth = (selectDate: Date): number => {
  return new Date(
    selectDate.getFullYear(),
    selectDate.getMonth() + 1,
    0
  ).getDate();
};
