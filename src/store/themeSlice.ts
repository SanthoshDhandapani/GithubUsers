import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";
import { getSystemThemeMode } from "../helpers";

const initialState: {
  mode: PaletteMode;
} = {
  mode: getSystemThemeMode(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
  selectors: {
    getMode: (state) => state.mode,
    getIsLightMode: (state) => state.mode === 'light',
  }
});

export const { toggleTheme } = themeSlice.actions;
export const { getMode, getIsLightMode } = themeSlice.selectors;
