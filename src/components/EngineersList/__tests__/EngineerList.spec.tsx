import { EngineersList } from "../EngineersList";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { createTestStore } from "../../../constants/createTestStore";
import "@testing-library/jest-dom";

const testStore = createTestStore();

describe("EngineersList", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = testStore;
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

    expect(screen.getByText("ENGINEER")).toBeVisible();
  });
});
