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

  it("should be rendered", () => {
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
  });

  it("the 'Week' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Week"));
    expect(navbarProps.switchToWeekDisplay).toHaveBeenCalled();
  });

  it("the 'Month' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Month"));
    expect(navbarProps.switchToMonthDisplay).toHaveBeenCalled();
  });

  it("the 'Today' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Today"));
    expect(navbarProps.goHome).toHaveBeenCalled();
  });

  it("the 'Next' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(">"));
    expect(navbarProps.switchToNextPeriod).toHaveBeenCalled();
  });

  it("the 'Back' button should be clickable", () => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("<"));
    expect(navbarProps.switchToPreviousPeriod).toHaveBeenCalled();
  });
});
