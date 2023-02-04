import Link from "next/link";
import React from "react";
import BtnTheme from "../BtnTheme";
import styled from "./styled.module.css";

import srcHome from "../../assets/image/icons/home.png";
import srcAbout from "../../assets/image/icons/about.png";
import srcTask from "../../assets/image/icons/task.png";
import Image from "next/image";
import Back from "../Back";

function Navbar() {
  return (
    <nav className={styled.container}>
      <h2 className={styled.title}>Productivity</h2>
      <ul className={styled.list}>
        <li>
          <picture className={styled.picture}>
            <Image className={styled.img} alt="home" src={srcHome}></Image>
          </picture>
          <Link className={styled.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <picture className={styled.picture}>
            <Image className={styled.img} alt="task" src={srcTask}></Image>
          </picture>
          <Link className={styled.link} href="/task">
            Tasks
          </Link>
        </li>
        <li>
          <picture className={styled.picture}>
            <Image className={styled.img} alt="about" src={srcAbout}></Image>
          </picture>
          <Link className={styled.link} href="/about">
            About
          </Link>
        </li>
      </ul>
      <BtnTheme> Theme</BtnTheme>
    </nav>
  );
}

export default Navbar;
