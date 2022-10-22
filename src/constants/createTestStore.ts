import { configureStore } from "@reduxjs/toolkit";
import dutiesReducer from "../store/dutiesSlice";

export const createTestStore = () => {
  return configureStore({
    reducer: {
      duties: dutiesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
