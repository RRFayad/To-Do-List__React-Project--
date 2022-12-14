import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
} from 'react';

import AuthContext from './auth-context';

export const ToDoListContext = React.createContext({
  toDos: [],
  addTodo: () => {},
  toggleStatus: () => {},
  removeTodo: () => {},
});

function ToDoListContextProvider({ children }) {
  const [toDos, setToDos] = useState([]);

  const authCtx = useContext(AuthContext);
  const { userId } = authCtx;
  const userIsLoggedIn = authCtx.isLoggedIn;
  const fetchURL = userId
    ? `https://personal-to-do-list-4ef11-default-rtdb.firebaseio.com/todos/${userId}.json`
    : null;

  const fetchToDos = useCallback(async () => {
    if (!userIsLoggedIn) return;
    try {
      setToDos([]);
      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const data = await response.json();

      const toDosList = [];
      for (const value of Object.values(data)) {
        toDosList.push(value);
      }
      setToDos(toDosList);
    } catch (error) {
      setToDos([]);
      throw new Error(
        error.message === 'Cannot convert undefined or null to object'
          ? 'No data'
          : error.message
      );
    }
  }, [userIsLoggedIn, fetchURL]);

  useEffect(() => {
    fetchToDos();
  }, [fetchToDos]);

  const addTodo = useCallback((item) => {
    const toDo = {
      task: item,
      done: false,
      id: new Date().toISOString(),
    };
    fetch(fetchURL, {
      method: 'POST',
      body: JSON.stringify(toDo),
    });
    setToDos((previousToDos) => [...previousToDos, toDo]);
  });

  const removeTodo = useCallback(async (id) => {
    const itemIndex = toDos.findIndex((item) => item.id === id);
    const newTodos = [...toDos];
    newTodos.splice(itemIndex, 1);
    setToDos(newTodos);
    // Improve Code here, I'm deleting all data and running a loop to post each ToDo again
    await fetch(fetchURL, { method: 'DELETE' });
    if (newTodos.length === 0) return;
    for (const todo of newTodos) {
      fetch(fetchURL, {
        method: 'POST',
        body: JSON.stringify(todo),
      });
    }
  });

  const toggleStatus = useCallback(async (id) => {
    const itemIndex = toDos.findIndex((item) => item.id === id);
    const newItem = toDos.find((item) => item.id === id);
    newItem.done = !newItem.done; // toggled status of the copy of the item
    const newTodos = [...toDos];
    newTodos.splice(itemIndex, 1, newItem);
    setToDos(newTodos);
    // Improve Code here, I'm deleting all data and running a loop to post each ToDo again (with updated status)
    await fetch(fetchURL, { method: 'DELETE' });
    for (const toDo of newTodos) {
      fetch(fetchURL, {
        method: 'POST',
        body: JSON.stringify(toDo),
      });
    }
  });

  const contextValue = useMemo(
    () => ({
      toDos,
      addTodo,
      removeTodo,
      toggleStatus,
    }),
    [toDos, addTodo, removeTodo, toggleStatus]
  );

  return (
    <ToDoListContext.Provider value={contextValue}>
      {children}
    </ToDoListContext.Provider>
  );
}

export default ToDoListContextProvider;
