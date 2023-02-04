import React from "react";
import TitleH1 from "../TitleH1";

import styled from "./styled.module.css";

function HeaderHome() {
  return (
    <header className={styled.header}>
      <TitleH1 class={styled.title}>Task Manager</TitleH1>
    </header>
  );
}

export default HeaderHome;
