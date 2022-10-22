import { NavbarContainer, NavbarContainerProps } from "../NavbarContainer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { RootState } from "../../../store/store";
import { Store } from "@reduxjs/toolkit";
import { createTestStore } from "../../../constants/createTestStore";

const testStore = createTestStore();

describe("NavbarContainer", () => {
  let navbarContainerProps: NavbarContainerProps;
  let store: Store<RootState>;

  const monthNameLong = new Date(2022, 9).toLocaleString("default", {
    month: "long",
  });

  const year = new Date(2022, 9).getFullYear();

  const currentDate = new Date();

  beforeEach(() => {
    navbarContainerProps = {
      switchToPreviousPeriod: jest.fn(),
      switchToNextPeriod: jest.fn(),
      switchToWeekDisplay: jest.fn(),
      switchToMonthDisplay: jest.fn(),
    };
    store = testStore;
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

    expect(screen.getByText(monthNameLong + " " + year)).toBeVisible();
  });

  it("should allow to set the custom date'", async () => {
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

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(store.getState().duties.customDateDisplay).toBe(true);
    });
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
      expect(navbarContainerProps.switchToWeekDisplay).toHaveBeenCalled();
    });
  });

  it("should send a user to the home page after clicking the 'Today' button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarContainer {...navbarContainerProps} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText("Today"));

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.getState().duties.currentDate.toLocaleString()).toBe(
      new Date().toLocaleString()
    );
  });
});
