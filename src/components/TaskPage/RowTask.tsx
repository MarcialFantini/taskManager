import { useAppSelector } from "@/store/hooks";
import React from "react";
import Task from "../Task";
import TitleH2 from "../TitleH2";

import styled from "./styled.module.css";

interface RowTaskProps {
  category: string;
}

function RowTask(props: RowTaskProps) {
  const listSelected = useAppSelector((state) => {
    return state.Tasks.tasks.filter((item) => item.category === props.category);
  });

  return (
    <div>
      <TitleH2>{props.category}</TitleH2>
      <div className={styled.containerRowTask}>
        {listSelected.map((item) => (
          <Task key={item.id} task={item}></Task>
        ))}
      </div>
    </div>
  );
}

export default RowTask;
