import { CustomDate } from "../CustomDate";
import { fireEvent, render, screen } from "@testing-library/react";
import { CustomDateContainerProps } from "../CustomDate";
import "@testing-library/jest-dom";

describe("CustomDate", () => {
  let customDateContainerProps: CustomDateContainerProps;

  beforeEach(() => {
    customDateContainerProps = {
      onSubmit: jest.fn(),
      handleYearChange: jest.fn(),
      handleMonthChange: jest.fn(),
      years: [2022, 2021],
      month: [9, 10, 11],
    };
  });
  it("should be rendered", () => {
    render(<CustomDate {...customDateContainerProps} />);
    expect(screen.getByText("Select a year:")).toBeVisible();
  });

  it("should allow to click the 'Submit' button", () => {
    render(<CustomDate {...customDateContainerProps} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(customDateContainerProps.onSubmit).toHaveBeenCalled();
  });

  it("should allow to change the year", () => {
    render(<CustomDate {...customDateContainerProps} />);
    fireEvent.change(screen.getByTestId("customDateYearInput"), {
      target: { value: "2021" },
    });
    expect(customDateContainerProps.handleYearChange).toHaveBeenCalled();
  });

  it("should allow to change the month", () => {
    render(<CustomDate {...customDateContainerProps} />);
    fireEvent.change(screen.getByTestId("customDateMonthInput"), {
      target: { value: "8" },
    });
    expect(customDateContainerProps.handleMonthChange).toHaveBeenCalled();
  });
});
