import { createSlice } from "@reduxjs/toolkit";

interface themeStateInterface {
  theme: string;
}

export const enum theme {
  LIGHT = "light",
  DARK = "dark",
}

const initialState: themeStateInterface = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    alterTheme: (state) => {
      if (state.theme === theme.LIGHT) {
        state.theme = theme.DARK;
      } else {
        state.theme = theme.LIGHT;
      }
    },
  },
});

export const { alterTheme } = themeSlice.actions;

export const reducerTheme = themeSlice.reducer;
