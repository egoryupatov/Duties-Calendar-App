import { EngineersList } from "../EngineersList";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import dutiesReducer from "../../../store/dutiesSlice";

const testStore = () => {
  return configureStore({
    reducer: {
      duties: dutiesReducer,
    },
  });
};

describe("EngineersList", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = testStore();
    store.dispatch = jest.fn(store.dispatch);
  });

  it("should be rendered", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EngineersList />
        </MemoryRouter>
      </Provider>
    );
  });

  it("should display engineer names", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EngineersList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("engineerName")).toBeVisible();
  });
});
