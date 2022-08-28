import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="to-do-app">
        <NewToDo />
        <ToDoList />
      </section>
    </div>
  );
}

export default App;
