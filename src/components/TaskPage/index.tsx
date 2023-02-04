import React from "react";
import PopNewTask from "../PopNewTask";
import TitleH2 from "../TitleH2";
import GridCategories from "./GridCategories";
import SearchTask from "./SearchTask";

import styled from "./styled.module.css";

function TaskPage() {
  return (
    <div className={styled.containerTask}>
      <TitleH2>Tasks Page</TitleH2>
      <SearchTask />
      <GridCategories></GridCategories>
      <PopNewTask></PopNewTask>
    </div>
  );
}

export default TaskPage;
