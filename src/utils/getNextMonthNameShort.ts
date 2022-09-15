export const getNextMonthNameShort = (date: Date): string => {
  return new Date(date.getFullYear(), date.getMonth() + 1).toLocaleDateString(
    "en-En",
    { month: "short" }
  );
};
