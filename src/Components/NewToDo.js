import classes from './NewToDo.module.css'

function NewToDo() {
    const submitHandler = () => {
        alert ('ihaa')
    }

    return (
        // <form onSubmit={submitHandler} className={`${classes['to-do-form']}`}>
        <>
        <div className={`${classes['to-do-title']}`}>
        <h1 >To Do List</h1>
        <p>(List only your main goals for the day!)</p>
        </div>
        <div className={`${classes['to-do-form']}`}>
        <form onSubmit={submitHandler} className={`${classes['new-to-do']}`}>
            <label htmlFor="todo">To Do Item</label>
            <input type="text" />
            <button>Add To Do</button>
        </form>
        </div>
        </>
    )
}

export default NewToDo;