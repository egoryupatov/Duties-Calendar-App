import { configureStore } from '@reduxjs/toolkit';
import dutiesReducer from './dutiesSlice'

export const store = configureStore({
  reducer: {
    duties: dutiesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
