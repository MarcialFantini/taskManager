"use client";
import React from "react";

interface props {
  class?: string;
  click?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
  name?: string;
}

function BtnTask(props: props) {
  return (
    <button name={props.name} className={props.class} onClick={props.click}>
      {props.children}
    </button>
  );
}

export default BtnTask;
