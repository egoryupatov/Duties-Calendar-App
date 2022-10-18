import { Navbar } from "../Navbar";
import { NavbarProps } from "../Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  let navbarProps: NavbarProps;

  beforeEach(() => {
    navbarProps = {
      currentMonthNameLong: "October",
      weekScreenActive: false,
      numberOfDaysInCurrentMonth: 30,
      selectDate: new Date(2022, 8),
      currentMonthNameShort: "Sep",
      nextMonthNameShort: "Oct",
      currentYearNumber: "2022",
      switchToNextPeriod: jest.fn(),
      switchToPreviousPeriod: jest.fn(),
      prevMonth: jest.fn(),
      nextMonth: jest.fn(),
      nextWeek: jest.fn(),
      prevWeek: jest.fn(),
      goHome: jest.fn(),
      customDateDisplay: jest.fn(),
      switchToWeekDisplay: jest.fn(),
      switchToMonthDisplay: jest.fn(),
      switchStatsDisplay: jest.fn(),
      isCustomDateActive: false,
    };
  });

  it("should render", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("October 2022")).toBeVisible();
  });

  it("the 'Set Custom Date' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Set Custom Date"));
    expect(navbarProps.customDateDisplay).toHaveBeenCalled();
    expect(navbarProps.customDateDisplay).toHaveBeenCalledTimes(1);
  });

  it("the 'Week' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("Navbar-WeekButton"));
    expect(navbarProps.switchToWeekDisplay).toHaveBeenCalled();
    expect(navbarProps.switchToWeekDisplay).toHaveBeenCalledTimes(1);
  });
});
