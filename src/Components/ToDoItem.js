import { useContext } from "react"

import {ToDoListContext} from "../Store/to-do-list-context"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import classes from './ToDoItem.module.css'

function ToDoItem(props) {

    const toDoCtx = useContext(ToDoListContext)

    const trashIcon = <FontAwesomeIcon icon={faTrash}/>

    const deleteHandler = () => {
        toDoCtx.removeTodo(props.value.id)
    }

    let statusClass = props.value.done? 'to-do-item__item--done' : 'to-do-item__item'   // I created this to toggle the status of the task (done / undone) and change the style

    const toggleStatusHandler = () => {
        toDoCtx.toggleStatus(props.value.id)
    }


    return (
        <div className={`${classes['to-do-item']}`}>
        <li className={`${classes[statusClass]}`} onClick={toggleStatusHandler}>{props.value.task}</li>
        <button className={`${classes['to-do-item__button']}`} onClick={deleteHandler}>{trashIcon}</button>
        </div>
    )
}

export default ToDoItem;