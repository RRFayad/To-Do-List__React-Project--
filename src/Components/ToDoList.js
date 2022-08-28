import { useContext } from "react";

import ToDoItem from "./ToDoItem";
import {ToDoListContext} from "../Store/to-do-list-context"

import classes from "./ToDoList.module.css";

function ToDoList() {

    const toDoCtx = useContext(ToDoListContext)

  return (
    <ul className={`${classes["to-do-form__list"]}`}>
      {toDoCtx.toDos.map((item) => {
        return <ToDoItem task={item.task} key={item.id} id={item.id}/>;
      })}
    </ul>
  );
}

export default ToDoList;
