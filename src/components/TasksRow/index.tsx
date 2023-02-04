import Image from "next/image";
import Text from "../Text";
import styled from "./styled.module.css";

import srcImg from "../../assets/taskImage.jpg";

function TaskRow() {
  return (
    <div className={styled.containerTask}>
      <div className={styled.containerText}>
        <Text>
          The app provides a tool for managing your schedule and tasks, helping
          you keep track of appointments, reminders, and other commitments. This
          can improve your productivity and help you stay on top of your
          responsibilities.
        </Text>
      </div>
      <picture className={styled.picture}>
        <Image className={styled.img} src={srcImg} alt="Task"></Image>
      </picture>
    </div>
  );
}

export default TaskRow;
