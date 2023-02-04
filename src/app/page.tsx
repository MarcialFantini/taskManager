import Back from "@/components/Back";
import HeaderHome from "@/components/HeaderHome";
import TaskRow from "@/components/TasksRow";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Back></Back>
      <HeaderHome></HeaderHome>
      <TaskRow></TaskRow>
    </main>
  );
}
