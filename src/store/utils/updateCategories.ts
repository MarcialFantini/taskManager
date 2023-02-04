import { TaskInterface } from "../TaskSlice/Task";

export const updateCategories = (tasksState: TaskInterface[]) => {
  const setCategories = new Set(tasksState.map((state) => state.category));
  const newState = Array.from(setCategories);
  return newState;
};
