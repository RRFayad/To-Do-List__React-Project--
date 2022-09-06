import NewToDo from "../Components/NewToDo";
import ToDoList from "../Components/ToDoList";
import NavBar from "../Components/NavBar";
import LoginForm from "../Components/LoginForm"

function HomePage() {
  return (
    <section className="to-do-app">
      <NewToDo />
      <ToDoList />
    </section>
  );
}

export default HomePage;
