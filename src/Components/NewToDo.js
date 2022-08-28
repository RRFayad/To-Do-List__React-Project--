import classes from './NewToDo.module.css'

function NewToDo() {
    const submitHandler = () => {
        alert ('ihaa')
    }

    return (
        // <form onSubmit={submitHandler} className={`${classes['to-do-form']}`}>
        <>
        <div className={`${classes['to-do-form__title']}`}>
        <h1>To Do List</h1>
        <p>(List only your main goals for the day!)</p>
        </div>
        <form onSubmit={submitHandler} className={`${classes['to-do-form__form']}`}>
            <label htmlFor="todo">To Do Item</label>
            <input type="text" />
            <button>Add To Do</button>
        </form>
        </>
    )
}

export default NewToDo;