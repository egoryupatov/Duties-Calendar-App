import { Month } from "../Month";
import { render, screen } from "@testing-library/react";
import { MonthContainerProps } from "../Month";
import { getCurrentMonthDays } from "../../../utils/getCurrentMonthDays";
import "@testing-library/jest-dom/extend-expect";

describe("Month", () => {
  it("should be rendered", () => {
    const dutiesMap: MonthContainerProps["dutiesMap"] = {
      2: {
        dutyStartDate: "2022-09-02T12:00:00.000Z",
        engineer: { name: "Ivan Petrov", avatarImage: "qq" },
      },
    };

    const prevMonthDays = [1, 2, 3];
    const nextMonthDays = [1, 2, 3];
    const currentMonthDays = getCurrentMonthDays(new Date(2022, 8, 2));

    render(
      <Month
        prevMonthDays={prevMonthDays}
        currentMonthDays={currentMonthDays}
        nextMonthDays={nextMonthDays}
        dutiesMap={dutiesMap}
      />
    );

    expect(screen.getByText("Ivan Petrov")).toBeVisible();
    expect(screen.getByText("22")).toBeVisible();
  });
});
