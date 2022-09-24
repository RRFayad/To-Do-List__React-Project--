import React, { useEffect, useState, useMemo } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: '',
  login: () => {},
  logout: () => {},
  changePassword: () => {},
});

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('userIsLoggedIn'));
    setUserId(JSON.parse(localStorage.getItem('userId')));
    setIdToken(JSON.parse(localStorage.getItem('idToken')));
  }, []);

  const url = {
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
    signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
    changePwd: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
  };

  const loginHandler = async (userHasAccount, email, password) => {
    const URL = userHasAccount ? url.login : url.signUp;
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      setUserId(data.localId);
      setIdToken(data.idToken);
      setIsLoggedIn(true);
      localStorage.setItem('userIsLoggedIn', JSON.stringify(true));
      localStorage.setItem('userId', JSON.stringify(data.localId));
      localStorage.setItem('idToken', JSON.stringify(data.idToken));
    }
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error.message
        ? errorData.error.message
        : 'Authentication Failed';
      // eslint-disable-next-line no-alert
      alert(errorMessage);
    }
  };

  const logoutHandler = () => {
    setUserId(null);
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const changePasswordHandler = async (password) => {
    let feedbackMessage;
    let succeed;
    const response = await fetch(url.changePwd, {
      method: 'POST',
      body: JSON.stringify({
        idToken,
        password,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      succeed = true;
      const data = await response.json();
      setIdToken(data.idToken);
      localStorage.setItem('idToken', JSON.stringify(data.idToken));
      feedbackMessage = 'Password Updated Successfully!';
    }
    if (!response.ok) {
      succeed = false;
      const errorData = await response.json();
      feedbackMessage = errorData.error.message
        ? errorData.error.message
        : 'Could not update the password';
    }
    return { feedbackMessage, succeed };
  };

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      userId,
      login: loginHandler,
      logout: logoutHandler,
      changePassword: changePasswordHandler,
    }),
    [isLoggedIn, userId, loginHandler, logoutHandler, changePasswordHandler]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
