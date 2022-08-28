import ToDoItem from "./ToDoItem";

import classes from "./ToDoList.module.css"

function ToDoList() {

    const DUMMY_TODOS = [{task:'Create To Do List Component', done:false},{task:'Create Pomodoro Timer', done:false},{task:'Create Music Player?', done:false}]

    return (
        <ul className={`${classes["to-do-form__list"]}`}>
        {DUMMY_TODOS.map((item) => {
           console.log(item)
           return <ToDoItem task={item.task}/>
        }
            )}
        </ul>
    )
}

export default ToDoList;