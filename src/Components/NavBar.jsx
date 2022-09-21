import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthContext from '../Store/auth-context';

import classes from './NavBar.module.css';

function NavBar(props) {
  const authCtx = useContext(AuthContext);
  const userIsLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      {userIsLoggedIn && (
        <button
          type="button"
          className={`${classes['nav-button--menu']}`}
          onClick={props.onToggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
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
