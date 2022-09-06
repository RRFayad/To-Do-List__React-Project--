import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <button className={`${classes["nav-button--title"]}`}>To Do List App</button>
      </Link>
      <nav>
        <Link to="/profile">
          <button className={`${classes["nav-button"]}`}>My Profile</button>
        </Link>
        <Link to="/login">
          <button className={`${classes["nav-button"]}`}>Login</button>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
