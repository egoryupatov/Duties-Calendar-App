import { NavbarContainer, NavbarContainerProps } from "../NavbarContainer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dutiesReducer from "../../../store/dutiesSlice";
import { RootState } from "../../../store/store";
import { Store } from "@reduxjs/toolkit";

const testStore = () => {
  return configureStore({
    reducer: {
      duties: dutiesReducer,
    },
  });
};

describe("NavbarContainer", () => {
  let navbarContainerProps: NavbarContainerProps;
  let store: Store<RootState>;

  beforeEach(() => {
    navbarContainerProps = {
      switchToPreviousPeriod: jest.fn(),
      switchToNextPeriod: jest.fn(),
    };
    store = testStore();
    store.dispatch = jest.fn(store.dispatch);
  });

  it("should be rendered", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarContainer {...navbarContainerProps} />
        </MemoryRouter>
      </Provider>
    );

    const date = new Date(2022, 9, 1).toLocaleDateString("en-En", {
      month: "long",
    });

    expect(screen.getByText("October 2022")).toBeVisible();
  });

  it("should allow to click on the 'Custom Date Button'", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarContainer {...navbarContainerProps} />
        </MemoryRouter>
      </Provider>
    );

    expect(store.getState().duties.customDateDisplay).toBe(false);
    fireEvent.click(screen.getByText("Set Custom Date"));
    fireEvent.click(screen.getByText("Submit"));
    expect(store.getState().duties.customDateDisplay).toBe(true);

    {
      /*
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith({});
    });

    await waitFor(() => {

    });
    */
    }
  });

  it("should switch to the Week display after clicking on the 'Week' button", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarContainer {...navbarContainerProps} />
        </MemoryRouter>
      </Provider>
    );

    expect(store.getState().duties.weekDisplay).toBe(false);
    fireEvent.click(screen.getByText("Week"));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(store.getState().duties.weekDisplay).toBe(true);
    });
  });
});
