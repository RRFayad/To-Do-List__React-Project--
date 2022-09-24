import React, { useState, useContext, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './Components/NavBar';
import AuthContext from './Store/auth-context';
import ModalMenu from './Components/ModalMenu';
import ModalMenuBackdrop from './Components/ModalMenuBackdrop';
import LoadingSpinner from './Components/LoadingSpinner';

import classes from './App.module.css';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const LoginPage = React.lazy(() => import('./Pages/LoginPage'));
const ProfilePage = React.lazy(() => import('./Pages/ProfilePage'));

function App() {
  const userIsLoggedIn = useContext(AuthContext).isLoggedIn;
  const [menuIsShown, setMenuIsShown] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsShown((prevState) => !prevState);
  };

  return (
    <div className={classes.App}>
      <header>
        <NavBar onToggleMenu={toggleMenuHandler} />
        {menuIsShown && (
          <>
            {ReactDOM.createPortal(
              <ModalMenuBackdrop onToggleMenu={toggleMenuHandler} />,
              document.querySelector('#backdrop-root')
            )}
            {ReactDOM.createPortal(
              <ModalMenu onToggleMenu={toggleMenuHandler} />,
              document.querySelector('#overlay-root')
            )}
          </>
        )}
      </header>
      <main>
        <Suspense
          fallback={
            <div className="fallback">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                userIsLoggedIn ? <HomePage /> : <Navigate replace to="/login" />
              }
            />
            <Route
              path="/login"
              element={
                userIsLoggedIn ? <Navigate replace to="/" /> : <LoginPage />
              }
            />
            <Route
              path="/profile"
              element={
                userIsLoggedIn ? <ProfilePage /> : <Navigate replace to="/" />
              }
            />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
