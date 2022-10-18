import { NavbarContainer, NavbarContainerProps } from "../NavbarContainer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dutiesReducer, {
  changeCustomDateDisplay,
} from "../../../store/dutiesSlice";
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
  });

  it("should be rendered", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarContainer {...navbarContainerProps} />
        </MemoryRouter>
      </Provider>
    );
    //переписать на динамику
    const date = "October 2022";

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
    //expect(store.getState().duties.customDateDisplay).toBe(false);
    fireEvent.click(screen.getByText("Set Custom Date"));
    //store.dispatch(changeCustomDateDisplay(true));
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith({});
      expect(store.getState().duties.customDateDisplay).toBe(true);
    });
  });
});
