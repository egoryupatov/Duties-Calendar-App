import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Engineer } from "../api/api-types";

export interface Duties {
  dutyStartDate: string;
  engineer: Engineer;
}

interface DutiesState {
  dutiesSchedule: Duties[];
  currentDate: Date;
  weekDisplay: boolean;
  statsDisplay: boolean;
  customDateDisplay: boolean;
}

const initialState: DutiesState = {
  dutiesSchedule: [],
  currentDate: new Date(),
  weekDisplay: false,
  statsDisplay: false,
  customDateDisplay: false,
};

export const dutiesSlice = createSlice({
  name: "duties",
  initialState,
  reducers: {
    getDuties: (state, action) => {
      state.dutiesSchedule = action.payload;
    },
    getCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    changeCalendarDisplay: (state, action) => {
      state.weekDisplay = action.payload;
    },
    changeStatsDisplay: (state, action) => {
      state.statsDisplay = !state.statsDisplay;
    },
    changeCustomDateDisplay: (state, action) => {
      state.customDateDisplay = !state.customDateDisplay;
    },
  },
});

export const {
  getDuties,
  getCurrentDate,
  changeCalendarDisplay,
  changeStatsDisplay,
  changeCustomDateDisplay,
} = dutiesSlice.actions;

export const selectDuties = (state: RootState) => state.duties.dutiesSchedule;
export const selectCurrentDate = (state: RootState) => state.duties.currentDate;
export const selectIsWeekDisplay = (state: RootState) =>
  state.duties.weekDisplay;
export const selectIsCustomDateActive = (state: RootState) =>
  state.duties.customDateDisplay;

export const sortedDuties = createSelector(selectDuties, (DutiesState) => {
  const dutiesMap: Record<number, Duties> = {};

  DutiesState.forEach((elem) => {
    const date = new Date(elem.dutyStartDate);

    if (elem.dutyStartDate !== null) {
      dutiesMap[date.getDate()] = elem;
    }
  });

  return dutiesMap;
});

export default dutiesSlice.reducer;
