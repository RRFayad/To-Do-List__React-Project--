import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>To Do List App</h1>
      <nav >
        <button className={`${classes['login-button']}`}>Login</button>
      </nav>
    </header>
  );
}

export default NavBar;
