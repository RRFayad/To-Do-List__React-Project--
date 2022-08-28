import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import classes from './ToDoItem.module.css'

function ToDoItem(props) {
    
    const clickHandler = () => {
        //Change the done status
        alert('Create Item CLick Handler')
    }

    const trashIcon = <FontAwesomeIcon icon={faTrash}/>

    return (
        <div className={`${classes['to-do-item']}`}>
        <li className={`${classes['to-do-item__item']}`} onClick={clickHandler}>{props.task}</li>
        <button className={`${classes['to-do-item__button']}`}>{trashIcon}</button>
        </div>
    )
}

export default ToDoItem;