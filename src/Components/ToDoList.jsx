import React, { useContext } from 'react';

import ToDoItem from './ToDoItem';
import { ToDoListContext } from '../Store/to-do-list-context';

import classes from './ToDoList.module.css';

function ToDoList() {
  const toDoCtx = useContext(ToDoListContext);

  return (
    <ul className={`${classes['to-do-form__list']}`}>
      {toDoCtx.toDos.map((item) => (
        <ToDoItem value={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ToDoList;
