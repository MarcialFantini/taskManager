"use client";

import { store } from "@/store/store";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface propsProviders {
  children: ReactNode;
}

function Providers(props: propsProviders) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default Providers;
