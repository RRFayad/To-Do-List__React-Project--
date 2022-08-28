import { useContext, useRef } from "react";

import {ToDoListContext} from "../Store/to-do-list-context"

import classes from './NewToDo.module.css'

function NewToDo() {

    const toDoCtx = useContext(ToDoListContext);

    const newItemRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (newItemRef.current.value.length===0){
            return
        }
        toDoCtx.addTodo(newItemRef.current.value);
        newItemRef.current.value="";
    }

    return (
        <section className={`${classes['to-do-form']}`}>
        <div className={`${classes['to-do-form__title']}`}>
        <h1>To Do List</h1>
        <p> <em>List only your main goals for the day!</em></p>
        </div>
        <form onSubmit={submitHandler} className={`${classes['to-do-form__form']}`}>
            <label htmlFor="todo">To Do Item</label>
            <input type="text" ref={newItemRef}/>
            <button>Add To Do</button>
        </form>
        </section>
    )
}

export default NewToDo;