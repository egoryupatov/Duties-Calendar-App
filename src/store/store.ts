import { configureStore } from "@reduxjs/toolkit";
import dutiesReducer from "./dutiesSlice";

export const store = configureStore({
  reducer: {
    duties: dutiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
