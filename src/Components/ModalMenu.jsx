import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from '../Store/auth-context';

import classes from './ModalMenu.module.css';

function ModalMenu(props) {
  const authCtx = useContext(AuthContext);

  return (
    <aside className={`${classes['modal-menu']}`}>
      <header>
        <span>
          <FontAwesomeIcon icon={faBars} />
          {'  Menu'}
        </span>
        <button type="button" onClick={props.onToggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </header>
      <main className={`${classes['modal-menu-main']}`}>
        <div>
          <Link to="/">
            <button
              type="button"
              className={`${classes['modal-menu-main__button']}`}
              onClick={props.onToggleMenu}
            >
              To Do List
            </button>
          </Link>
          <Link to="/profile">
            <button
              type="button"
              className={`${classes['modal-menu-main__button']}`}
              onClick={props.onToggleMenu}
            >
              Profile
            </button>
          </Link>
        </div>
        <button
          type="button"
          id=""
          className={`${classes['modal-menu-main__button']}`}
          onClick={() => {
            authCtx.logout();
            props.onToggleMenu();
          }}
        >
          Logout
        </button>
      </main>
    </aside>
  );
}

export default ModalMenu;
