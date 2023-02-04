import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

import { updateCategories } from "../utils/updateCategories";
import { initialState } from "../utils/TaskStateLocal";

export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  complete: boolean;
  time: number | string;
  category: string;
}

export interface initialStateInterface {
  tasks: TaskInterface[];
  categories: string[];
  categorySelected: string;
  pop: boolean;
}

export const TaskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    setInitialState: (state, actions: PayloadAction<initialStateInterface>) => {
      state = actions.payload;
    },
    setCategoryString: (state, actions: PayloadAction<string>) => {
      state.categorySelected = actions.payload;
    },
    alterPop: (state) => {
      state.pop = !state.pop;
    },
    addTask: (state, actions: PayloadAction<TaskInterface>) => {
      let newTask = { ...actions.payload };
      newTask.id = v4();
      state.tasks = [...state.tasks, newTask];
      state.categories = updateCategories(state.tasks);
    },
    delTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.categories = updateCategories(state.tasks);
    },
    doneTask: (state, action: PayloadAction<string>) => {
      const id = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[id].complete = !state.tasks[id].complete;
    },
  },
});

export const {
  addTask,
  setCategoryString,
  setInitialState,
  alterPop,
  delTask,
  doneTask,
} = TaskSlice.actions;

export default TaskSlice.reducer;
