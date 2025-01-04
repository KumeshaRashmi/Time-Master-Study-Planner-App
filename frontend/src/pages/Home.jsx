import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Pomodoro Timer App</h1>
      <Link
        to="/pomodoro"
        className="bg-white text-blue-500 px-6 py-3 rounded font-bold"
      >
        Go to Pomodoro Timer
      </Link>
    </div>
  );
}

export default Home;
