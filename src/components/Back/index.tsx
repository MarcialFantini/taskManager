"use client";
import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import styled from "./styled.module.css";
function Back() {
  const [state, setState] = useState("dark");
  const theme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
    setState(theme);
  }, [theme]);

  return <div className={styled.lightContainer + " " + styled[state]}></div>;
}

export default Back;
