import React from 'react';

import NewToDo from '../Components/NewToDo';
import ToDoList from '../Components/ToDoList';

function HomePage() {
  return (
    <section className="to-do-app">
      <NewToDo />
      <ToDoList />
    </section>
  );
}

export default HomePage;
