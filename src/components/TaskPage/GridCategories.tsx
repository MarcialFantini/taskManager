"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import TasksFilter from "../TasksFilter";
import RowTask from "./RowTask";

import styled from "./styled.module.css";

function GridCategories() {
  const categories = useAppSelector((state) => state.Tasks.categories);
  const isFinding = useAppSelector((state) => state.Tasks.categorySelected);

  return (
    <>
      {isFinding === "" ? (
        <div className={styled.containerTasks}>
          {categories.map((item, x) => (
            <RowTask key={x} category={item}></RowTask>
          ))}
        </div>
      ) : (
        <TasksFilter></TasksFilter>
      )}
    </>
  );
}

export default GridCategories;
