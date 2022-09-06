import { useContext, useRef, useState } from "react";
import AuthContext from "../Store/auth-context";

import classes from "./LoginForm.module.css";

/*
NEXT STEPS:
    - Review and organize the code in this component;
    - Add Routes and Pages (for logged in and logged out);
    - Develop the dummy backend authentication (Firebase);
    - Refactor and useMemo;
    - Deploy App;
*/

function LoginForm() {
  const [userHasAccount, setUserHasAccount] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setpasswordIsTouched] = useState(false);

  const authCtx = useContext(AuthContext);

  const inputEmail = useRef();
  const inputPassword = useRef();

  // Created these helpers to control valid / invalid form, and return user feedback
  let emailControlClass = !emailIsValid && emailIsTouched ? "invalid" : null;
  let passwordControlClass = !passwordIsValid && passwordIsTouched ? "invalid" : null;

  const checkEmailIsValid = () => {
    const email = inputEmail.current.value.trim();
    setEmailIsValid(
      email.indexOf("@") > 0 && email.indexOf("@") <= email.length - 2
    );
  };

  const checkPasswordIsValid = () => {
    const password = inputPassword.current.value;
    setPasswordIsValid(password.length >= 6);
  };

  const submitHandler = (event) => {
    // Update this function after I made my validations before
    event.preventDefault();
    if (emailIsValid && passwordIsValid) {
      authCtx.login();
    } else {
      alert("Login failed - Check your e-mail and password");
    }
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
        <input
          type="email"
          id="email"
          ref={inputEmail}
          onFocus={() => setEmailIsTouched(false)}
          onBlur={()=> setEmailIsTouched(true)}
          onChange={checkEmailIsValid}
          className={`${classes[emailControlClass]}`}
        />
        {emailControlClass === "invalid" && <p>Please enter a valid email</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={inputPassword}
          onFocus={() => setpasswordIsTouched(false)}
          onBlur={()=> setpasswordIsTouched(true)}
          onChange={checkPasswordIsValid}
          className={`${classes[passwordControlClass]}`}
        />
        {passwordControlClass === "invalid" && <p>Your password must have at least 6 digits</p>}
        <button
          className={`${classes["login-form__login-button"]}`}
          onClick={submitHandler}
          disabled={!emailIsValid || !passwordIsValid}
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
