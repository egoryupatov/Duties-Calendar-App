import { DutiesAPI } from "./api-types";
import { getNumberOfDaysInCurrentMonth } from "../utils/getNumberOfDaysInCurrentMonth";

export const getDutiesListApi = (startDate: Date): Promise<DutiesAPI[]> => {
  const currentYearNumber = startDate.toLocaleDateString("en-En", {
    year: "numeric",
  });

  const currentMonthNumber = startDate.toLocaleDateString("en-En", {
    month: "2-digit",
  });

  return fetch("http://de-bot.infra.cloud.chattermill.xyz/api/v1/bot/duties", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      payload: {
        startDate: `${currentYearNumber}-${currentMonthNumber}-01`,
        endDate: `${currentYearNumber}-${currentMonthNumber}-${getNumberOfDaysInCurrentMonth(
          startDate
        )}`,
      },
    }),
  }).then<DutiesAPI[]>((response) => {
    return response.json();
  });
};
