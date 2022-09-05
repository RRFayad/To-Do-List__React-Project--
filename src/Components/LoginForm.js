import { useContext, useRef, useState } from "react";
import AuthContext from "../Store/auth-context";

import classes from "./LoginForm.module.css";

function LoginForm() {
  const [userHasAccount, setUserHasAccount] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setpasswordIsTouched] = useState(false);

  const authCtx = useContext(AuthContext);

  const inputEmail = useRef();
  const inputPassword = useRef();

  const checkEmailIsValid = (email) => {
    return email.indexOf("@") > 0 && email.indexOf("@") <= email.length - 2;
  };

  const checkPasswordIsValid = (password) => {
    return password.length > 5;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEmailIsValid(checkEmailIsValid(inputEmail.current.value));
    setPasswordIsValid(checkPasswordIsValid(inputPassword.current.value));
    alert(`Email:${emailIsValid} | PW:${passwordIsValid}`);
  };

  function toggleAccountAction(event) {
    event.preventDefault();
    setUserHasAccount((prevState) => !prevState);
  }

  return (
    <section className={`${classes["login-form__section"]}`}>
      <h1 className={`${classes["login-form__title"]}`}>
        {userHasAccount ? "Login" : "Sign Up"}
      </h1>
      <form className={`${classes["login-form__form"]}`}>
        <label htmlFor="e-mail">E-mail:</label>
        <input type="email" id="email" ref={inputEmail} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={inputPassword} />
        <button
          className={`${classes["login-form__login-button"]}`}
          onClick={submitHandler}
        >
          {userHasAccount ? "Login" : "Create Account"}
        </button>
        <button
          className={`${classes["login-form__toggle-button"]}`}
          onClick={toggleAccountAction}
        >
          {userHasAccount ? "Create new account" : "I have an account"}
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
