import React, { useState } from "react";

export const ToDoListContext = React.createContext({
    toDos:[],
    addTodo:() => {},
    toggleStatus:() => {},
    removeTodo:() => {},
});

const DUMMY_TODOS = [
    {task:'Create To Do List', done:false, id:1},
    {task:'Create Pomodoro Timer', done:false, id:2},
    {task:'Create Dummy Back End', done:false, id:3},
    {task:'Deploy', done:false, id:4},
    {task:'Refactor', done:false, id:5},
]

const ToDoListContextProvider = (props) => {

    const [toDos, setToDos] = useState(DUMMY_TODOS)

    const addTodo = (item) => {
        const toDo = {
            task:item,
            done:false,
            id:new Date().toISOString()
        }
        setToDos((previousToDos) => [...previousToDos,toDo])
    };

    const removeTodo = (id) => {
        const itemIndex = toDos.findIndex((item) => item.id === id);
        const newTodos = [...toDos];
        newTodos.splice(itemIndex,1);
        setToDos(newTodos)
    };

    const toggleStatus = (id) => {
        const itemIndex = toDos.findIndex((item) => item.id === id);
        const newItem = toDos.find((item) => item.id === id);
        newItem.done=!newItem.done //toggled status of the copy of the item
        const newTodos = [...toDos];
        newTodos.splice(itemIndex,1,newItem);
        setToDos(newTodos)
    }


    const contextValue = {
        toDos,
        addTodo,
        removeTodo,
        toggleStatus,
    }

    return (
        <ToDoListContext.Provider value={contextValue}>
            {props.children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListContextProvider;