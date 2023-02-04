import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";

import { delTask, doneTask, TaskInterface } from "../../store/TaskSlice/Task";
import BtnTask from "../BtnTask";

import styled from "./styled.module.css";

interface taskProps {
  task: TaskInterface;
}

function Task({ task }: taskProps) {
  console.log("AAAAAAAAAAAAAAAAAAAA");

  const theme = useAppSelector((state) => state.theme.theme);
  console.log("AAAAAAAAAAAAAAAAAAAA");

  const dispatch = useAppDispatch();

  const DelTaskClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    dispatch(delTask(event.currentTarget.name));
  };

  const DoneTaskClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(doneTask(event.currentTarget.name));

  return (
    <div className={styled["containerTask"] + " " + styled[theme]}>
      <h2 className={styled.title}>{task.title}</h2>
      <p
        className={task.complete ? styled.textComplete : styled.textNoComplete}
      >
        State: {task.complete ? "Complete" : "Not Complete"}
      </p>
      <p>{task.description}</p>
      <div className={styled.actions}>
        <BtnTask
          click={DoneTaskClick}
          name={task.id}
          class={styled.button + " " + styled.done}
        >
          {!task.complete ? "Done" : "Cancel"}
        </BtnTask>

        <BtnTask
          name={task.id}
          click={DelTaskClick}
          class={styled.button + " " + styled.del}
        >
          Del
        </BtnTask>
      </div>
    </div>
  );
}

export default Task;
