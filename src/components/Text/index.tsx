"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import styled from "./styled.module.css";

interface props {
  children: string;
}

function Text(props: props) {
  const theme = useAppSelector((state) => state.theme.theme);

  return <p className={styled[theme]}>{props.children}</p>;
}

export default Text;
