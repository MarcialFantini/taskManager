"use client";

import { useAppSelector } from "@/store/hooks";
import React from "react";
import styled from "./styled.module.css";

interface props {
  children: string;
  class?: string;
}

function TitleH2(props: props) {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <h2 className={styled.h2 + " " + styled[theme] + " " + props.class}>
      {props.children}
    </h2>
  );
}

export default TitleH2;
