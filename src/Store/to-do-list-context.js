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

  const fetchToDos = async () => {
    try {
      const response = await fetch(
        "https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json"
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      const toDosList = [];
      for (const value of Object.values(data)) {
        toDosList.push(value);
      }
      setToDos(toDosList);
    } catch (error) {
      console.log(
        error.message === "Cannot convert undefined or null to object"
          ? "No data"
          : error.message
      );
    }
  };

  useEffect(() => {
    fetchToDos();
  }, []);

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
    // Improve Code here, I'm deleting all data and running a loop to post each ToDo again
    fetch(
      "https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json",
      {
        method: "DELETE",
      }
    ).then(() => {
      if (newTodos.length === 0) return;
      for (const item of newTodos) {
        fetch(
          "https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json",
          {
            method: "POST",
            body: JSON.stringify(item),
          }
        );
      }
    });
  };

  const toggleStatus = (id) => {
    const itemIndex = toDos.findIndex((item) => item.id === id);
    const newItem = toDos.find((item) => item.id === id);
    newItem.done = !newItem.done; //toggled status of the copy of the item
    const newTodos = [...toDos];
    newTodos.splice(itemIndex, 1, newItem);
    setToDos(newTodos);
    // Improve Code here, I'm deleting all data and running a loop to post each ToDo again (with updated status)
    fetch(
      "https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json",
      {
        method: "DELETE",
      }
    ).then(() => {
      for (const item of newTodos) {
        fetch(
          "https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos.json",
          {
            method: "POST",
            body: JSON.stringify(item),
          }
        );
      }
    });
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
