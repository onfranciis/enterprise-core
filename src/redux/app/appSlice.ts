import { createSlice } from "@reduxjs/toolkit";
import {
  AppInitialState,
  changeVersionActionType,
  changeModeActionType,
} from "./appType";

const initialState: AppInitialState = {
  version: "v1",
  darkMode: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    CHANGE_VERSION: (state, action: changeVersionActionType) => {
      state.version = action.payload.version;
    },

    CHANGE_MODE: (state, action: changeModeActionType) => {
      state.darkMode = action.payload.dark;
    },
  },
});

export const { CHANGE_VERSION, CHANGE_MODE } = appSlice.actions;
export default appSlice.reducer;
