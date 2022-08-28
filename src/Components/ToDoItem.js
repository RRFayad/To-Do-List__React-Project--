import { useContext } from "react"

import {ToDoListContext} from "../Store/to-do-list-context"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import classes from './ToDoItem.module.css'

function ToDoItem(props) {

    const toDoCtx = useContext(ToDoListContext)

    const trashIcon = <FontAwesomeIcon icon={faTrash}/>

    return (
        <div className={`${classes['to-do-item']}`}>
        <li className={`${classes['to-do-item__item']}`} onClick={toDoCtx.toggleStatus}>{props.task}</li>
        <button className={`${classes['to-do-item__button']}`} onClick={toDoCtx.removeTodo}>{trashIcon}</button>
        </div>
    )
}

export default ToDoItem;