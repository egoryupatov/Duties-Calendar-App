import { CustomDateContainer } from "../CustomDateContainer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createTestStore } from "../../../constants/createTestStore";
import { RootState } from "../../../store/store";
import { Store } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const testStore = createTestStore();

describe("Custom Date Container", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = testStore;
    store.dispatch = jest.fn(store.dispatch);
  });

  it("should be rendered", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomDateContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Select a year:")).toBeVisible();
  });

  it("dispatches the 'Custom date' state and replace the current date in store", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomDateContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(store.getState().duties.customDateDisplay).toBe(false);
    fireEvent.change(screen.getByTestId("customDateYearInput"), {
      target: { value: "2021" },
    });
    fireEvent.change(screen.getByTestId("customDateMonthInput"), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(store.getState().duties.currentDate).toStrictEqual(
        new Date(2021, 2)
      );
    });
  });
});
