"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import Task from "../Task";
import styled from "./styled.module.css";

function TasksFilter() {
  const tasksFilter = useAppSelector((state) => {
    return state.Tasks.tasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(state.Tasks.categorySelected.toLowerCase())
    );
  });
  return (
    <div className={styled.containerTaskFilter}>
      {tasksFilter.map((task) => {
        return <Task key={task.id} task={task}></Task>;
      })}
    </div>
  );
}

export default TasksFilter;
