import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../models/models";

const initialState: AppState = {
  togglePage: false,
};

const App = createSlice({
  name: "App",
  initialState,
  reducers: {
    setTogglePage(state, action: PayloadAction<boolean>) {
      state.togglePage = action.payload;
    },
  },
});

export const AppActions = App.actions;
export const AppReducer = App.reducer;
