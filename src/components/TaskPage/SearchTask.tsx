"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { alterPop, setCategoryString } from "@/store/TaskSlice/Task";
import React, { useEffect, useState } from "react";
import BtnTask from "../BtnTask";
import TitleH2 from "../TitleH2";

import styled from "./styled.module.css";

function SearchTask() {
  const theme = useAppSelector((state) => state.theme.theme);
  const [nameTask, setNameTask] = useState("");

  const inputHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(event.target.value);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategoryString(nameTask.toLowerCase()));
  }, [nameTask]);

  const handlerClick = () => {
    dispatch(alterPop());
  };

  return (
    <div className={styled.containerSearch}>
      <TitleH2 class={styled.titleH2}>Search task!</TitleH2>
      <input
        className={
          theme === "dark"
            ? styled["input"] + " " + styled.darkSearch
            : styled["input"] + " " + styled.lightSearch
        }
        placeholder="Search your Task"
        onChange={inputHandlerName}
        type="text"
        value={nameTask}
      />
      <BtnTask
        click={handlerClick}
        class={styled["BtnTask"] + " " + styled[theme]}
      >
        New Task
      </BtnTask>
    </div>
  );
}

export default SearchTask;
