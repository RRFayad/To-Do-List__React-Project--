import React, { useEffect, useState } from "react";

export const ToDoListContext = React.createContext({
  toDos: [],
  addTodo: () => {},
  toggleStatus: () => {},
  removeTodo: () => {},
});

const DUMMY_TODOS = [
  { task: "Fetch data", done: false, id: 1 },
  { task: "Link the back end to the update functions", done: false, id: 2 },
  { task: "Create Nav Bar", done: false, id: 3 },
  { task: "Create login method", done: false, id: 4 },
  { task: "Deploy", done: false, id: 5 },
  { task: "Refactor", done: false, id: 6 },
];

const ToDoListContextProvider = (props) => {
  const [toDos, setToDos] = useState([]);

//   useEffect (() => {
//     async () => {
//       try{
//         const response = await fetch("https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json");
//         if (!response.ok) {
//           throw new Error ('Something went wrong')
//         }
//         const data = await response.json();
//         console.log(data);
//         return
//       } catch (error) {
//         throw error
//       }
//   }
// }, [])

useEffect(() => {
  const data = fetch('https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => data);
      data.then((item) => {
      const toDosList = [];
       for (const value of Object.values(item)) {
        toDosList.push(value)
       };
       setToDos(toDosList)
      })
},[])

  const addTodo = (item) => {
    const toDo = {
      task: item,
      done: false,
      id: new Date().toISOString(),
    };
    fetch(
      "https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        body: JSON.stringify(toDo),
      }
    );
    setToDos((previousToDos) => [...previousToDos, toDo]);
  };

  const removeTodo = (id) => {
    const itemIndex = toDos.findIndex((item) => item.id === id);
    const newTodos = [...toDos];
    newTodos.splice(itemIndex, 1);
    setToDos(newTodos);
    // Create code to find item in Firebase via ID, and delete it
  };

  const toggleStatus = (id) => {
    const itemIndex = toDos.findIndex((item) => item.id === id);
    const newItem = toDos.find((item) => item.id === id);
    newItem.done = !newItem.done; //toggled status of the copy of the item
    const newTodos = [...toDos];
    newTodos.splice(itemIndex, 1, newItem);
    setToDos(newTodos);
    // Create code to find item in Firebase via ID, and toggle status
  };

  const contextValue = {
    toDos,
    addTodo,
    removeTodo,
    toggleStatus,
  };

  return (
    <ToDoListContext.Provider value={contextValue}>
      {props.children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
