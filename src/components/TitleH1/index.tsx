import React from "react";
interface props {
  children: string;
  class: string;
}

function TitleH1(props: props) {
  return <h1 className={props.class}>{props.children}</h1>;
}

export default TitleH1;
