"use client";

import Back from "@/components/Back";
import TaskPage from "@/components/TaskPage";
import { useAppSelector } from "@/store/hooks";

import styled from "./styled.module.css";

function TaskPageRoute() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={`${styled["containerPage"]}`}>
      <Back></Back>
      <TaskPage></TaskPage>
    </div>
  );
}

export default TaskPageRoute;
