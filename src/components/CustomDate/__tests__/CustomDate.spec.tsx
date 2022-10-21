import { CustomDate } from "../CustomDate";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { CustomDateContainerProps } from "../CustomDate";
import { configureStore, Store } from "@reduxjs/toolkit";
import dutiesReducer from "../../../store/dutiesSlice";
import { RootState } from "../../../store/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

const testStore = () => {
  return configureStore({
    reducer: {
      duties: dutiesReducer,
    },
  });
};

describe("CustomDate", () => {
  let customDateContainerProps: CustomDateContainerProps;
  let store: Store<RootState>;

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

  it("should allow to change the date", () => {
    render(<CustomDate {...customDateContainerProps} />);
    fireEvent.click(screen.getByTestId("customDateYearInput"));
    fireEvent.click(screen.getByText("2021"));
    expect(customDateContainerProps.handleYearChange).toHaveBeenCalled();

    //как проверить выбор параметра в инпуте
    //как сделать диспатч состояния что выбрана кастомная дата
  });
});
