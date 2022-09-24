import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Store/auth-context';

import classes from './UserProfile.module.css';

function UserProfile() {
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const passwordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    setPasswordIsTouched(true);
    if (password.length >= 6) {
      setPasswordIsTouched(false);
      const response = await authCtx.changePassword(password);
      alert(response.feedbackMessage);
      if (response.succeed) navigate('/');
      event.target.reset();
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <h1 className={classes.form__title}>Change Your Password</h1>
      <label htmlFor="password">
        New Password
        <input type="password" id="password" ref={passwordRef} />
      </label>
      {passwordIsTouched && (
        <span>*Password must contain at least 6 characters</span>
      )}
      <button type="submit" className={`${classes.form__button}`}>
        Change Password
      </button>
    </form>
  );
}

export default UserProfile;
