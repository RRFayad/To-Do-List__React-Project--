import classes from './ToDoItem.module.css'

function ToDoItem(props) {
    
    const clickHandler = () => {
        //Change the done status
        alert('Create Item CLick Handler')
    }

    return (
        <li className={`${classes['to-do-form__item']}`} onClick={clickHandler}>{props.task}</li>
    )
}

export default ToDoItem;