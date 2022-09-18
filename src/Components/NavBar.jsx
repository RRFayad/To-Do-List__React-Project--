import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../Store/auth-context';

import classes from './NavBar.module.css';

function NavBar() {
  const authCtx = useContext(AuthContext);
  const userIsLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <Link to="/">
        <button type="button" className={`${classes['nav-button--title']}`}>
          To Do List App
        </button>
      </Link>
      <nav>
        {userIsLoggedIn && (
          <>
            <Link to="/profile">
              <button type="button" className={`${classes['nav-button']}`}>
                My Profile
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                className={`${classes['nav-button']}`}
                onClick={authCtx.logout}
              >
                Logout
              </button>
            </Link>
          </>
        )}
        {!userIsLoggedIn && (
          <Link to="/login">
            <button type="button" className={`${classes['nav-button']}`}>
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
