import React, { useState } from "react";

export const ToDoListContext = React.createContext({
    toDos:[],
    addTodo:() => {},
    toggleStatus:() => {},
    removeTodo:() => {},
});

const ToDoListContextProvider = (props) => {

    const [toDos, setToDos] = useState([])

    const addTodo = (item) => {
        const toDo = {
            task:item,
            done:false,
            id:new Date().toISOString()
        }
        setToDos((previous) => [...previous,toDo])
    }

    const contextValue = {
        toDos,
        addTodo,
        toggleStatus:() => alert('Toggle Status Function'),
        removeTodo:() => alert('Remove To Do Function'),
    }

    return (
        <ToDoListContext.Provider value={contextValue}>
            {props.children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;