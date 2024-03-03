import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

const initialState: {
  mode: PaletteMode;
} = {
  mode: "light",
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
  }
});

export const { toggleTheme } = themeSlice.actions;
export const { getMode } = themeSlice.selectors;
