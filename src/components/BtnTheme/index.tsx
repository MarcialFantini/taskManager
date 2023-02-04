"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { alterTheme } from "@/store/ThemeSlice/ThemeSlice";
import React from "react";
import styled from "./styled.module.css";
interface props {
  children: string;
}

function BtnTheme(props: props) {
  const theme = useAppSelector((state) => state.theme.theme);

  const dispatch = useAppDispatch();

  const handlerBtn = () => dispatch(alterTheme());

  return (
    <button
      onClick={handlerBtn}
      className={styled["btn"] + " " + styled[theme]}
    >
      {props.children}
    </button>
  );
}

export default BtnTheme;
