"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTask, alterPop, TaskInterface } from "@/store/TaskSlice/Task";
import React, { useState } from "react";

import styled from "./styled.module.css";

const initialState: TaskInterface = {
  title: "",
  description: "",
  complete: false,
  id: "",
  time: 0,
  category: "",
};

function PopNewTask() {
  const dispatch = useAppDispatch();
  const isPop = useAppSelector((state) => state.Tasks.pop);

  const [task, setTask] = useState(initialState);

  const handlerSetTask = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTask({ ...task, [event.target.name]: event.target.value });

  const alterPopFunction = () => dispatch(alterPop());

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTask(task));
    alterPopFunction();
  };

  return (
    <>
      {isPop ? (
        <div className={styled.containerAll}>
          <form onSubmit={handlerSubmit} className={styled.PopContainer}>
            <label className={styled.label}>
              Title:
              <input name="title" onChange={handlerSetTask} type="text" />
            </label>
            <label className={styled.label}>
              Description:
              <input name="description" onChange={handlerSetTask} type="text" />
            </label>

            <label className={styled.label}>
              Time:
              <input name="time" onChange={handlerSetTask} type="number" />
            </label>
            <label className={styled.label}>
              Category:
              <input name="category" onChange={handlerSetTask} type="text" />
            </label>
            <button className={styled.btnSubmit} type="submit">
              Add
            </button>
            <button className={styled.btnSubmit} onClick={alterPopFunction}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PopNewTask;
