import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";
import NavBar from "./Components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="to-do-app">
        <NavBar/>
        <NewToDo />
        <ToDoList />
      </section>
    </div>
  );
}

export default App;
