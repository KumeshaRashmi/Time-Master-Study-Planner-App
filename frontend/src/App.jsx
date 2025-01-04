import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
      </Routes>
    </Router>
  );
}

export default App;
