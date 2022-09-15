export const getCurrentYearNumber = (date: Date): string => {
  return date.toLocaleDateString("en-En", {
    year: "numeric",
  });
};
