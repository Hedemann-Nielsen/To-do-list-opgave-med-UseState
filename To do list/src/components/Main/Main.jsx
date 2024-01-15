import style from "./Main.module.scss";
import { List } from "../List/list";

export function Main() {
  return (
    <>
    <div className={style.label}>
        <h1>To Do</h1>
        <List></List>
    </div>
    </>
  )
}
