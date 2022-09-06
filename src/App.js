import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage"

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
