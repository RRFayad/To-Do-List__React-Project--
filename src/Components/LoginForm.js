import classes from "./LoginForm.module.css";

function LoginForm() {
  const submitHandler = () => {
    alert("Delevop submit handler"); //sdf
  };

  return (
    <section className={`${classes["login-form__section"]}`}>
      <h1 className={`${classes["login-form__title"]}`}>Login</h1>
      <form onSubmit={submitHandler} className={`${classes["login-form__form"]}`}>
          <label htmlFor="e-mail">E-mail:</label>
          <input type="e-mail" />
          <label htmlFor="password">Password:</label>
          <input type="password" />
        <button className={`${classes["login-form__login-button"]}`}>Login*</button>
        <button className={`${classes["login-form__toggle-button"]}`}>Create new account</button>
      </form>
    </section>
  );
}

export default LoginForm;