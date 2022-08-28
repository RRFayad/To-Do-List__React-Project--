import { useContext } from "react";

import ToDoItem from "./ToDoItem";
import {ToDoListContext} from "../Store/to-do-list-context"

import classes from "./ToDoList.module.css";

function ToDoList() {
  const DUMMY_TODOS = [
    { task: "Create To Do List Component", done: false, id:1 },
    { task: "Create Pomodoro Timer", done: false, id:2 },
    { task: "Create Music Player?", done: false, id:3 },
  ];

  const toDoCtx = useContext(ToDoListContext)

  return (
    <ul className={`${classes["to-do-form__list"]}`}>
      {toDoCtx.toDos.map((item) => {
        return <ToDoItem task={item.task} key={item.id}/>;
      })}
    </ul>
  );
}

export default ToDoList;
