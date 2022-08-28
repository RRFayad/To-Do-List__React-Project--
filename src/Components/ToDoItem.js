import { useContext } from "react"

import {ToDoListContext} from "../Store/to-do-list-context"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import classes from './ToDoItem.module.css'

function ToDoItem(props) {

    const toDoCtx = useContext(ToDoListContext)

    const trashIcon = <FontAwesomeIcon icon={faTrash}/>

    const deleteHandler = () => {
        toDoCtx.removeTodo(props.id)
    }

    const toggleStatusHandler = () => {
        toDoCtx.toggleStatus(props.id)
    }

    return (
        <div className={`${classes['to-do-item']}`}>
        <li className={`${classes['to-do-item__item']}`} onClick={toggleStatusHandler}>{props.task}</li>
        <button className={`${classes['to-do-item__button']}`} onClick={deleteHandler}>{trashIcon}</button>
        </div>
    )
}

export default ToDoItem;