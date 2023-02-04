import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TaskSlice/Task";
import { reducerTheme } from "./ThemeSlice/ThemeSlice";

export const store = configureStore({
  reducer: { Tasks: TaskReducer, theme: reducerTheme },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
