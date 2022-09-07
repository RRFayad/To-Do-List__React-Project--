import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./Components/NavBar";
import AuthContext from "./Store/auth-context";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage"

import "./App.css";

function App() {

  const userIsLoggedIn = useContext(AuthContext).isLoggedIn;

  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
        <Route path='/' element={ userIsLoggedIn? <HomePage/> : <Navigate replace to="/login"/>} />
        <Route path='/login' element={ userIsLoggedIn? <Navigate replace to="/"/> : <LoginPage/>} />
        <Route path='/profile' element={ userIsLoggedIn? <ProfilePage/> : <Navigate replace to="/"/>} />
        <Route path='/*' element={<Navigate replace to="/"/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
