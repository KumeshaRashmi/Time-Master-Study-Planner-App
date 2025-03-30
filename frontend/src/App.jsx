import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PomodoroTimer from "./components/PomodoroTimer";
import About from "./components/About";
import Setting from "./pages/setting";
import SignUp from "./pages/signup";
import SignIn from "./pages/login";
import Header from "./components/Header";
import './index.css';
import ToDo from "./pages/ToDo";


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<PomodoroTimer />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/todo" element={<ToDo/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

