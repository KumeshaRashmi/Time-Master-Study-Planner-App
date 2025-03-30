import { useState, useEffect } from "react";
import Header2 from "./Header2";

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default Pomodoro time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Pomodoro"); // Modes: Pomodoro, Short Break, Long Break

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    if (mode === "Pomodoro") {
      setTimeLeft(25 * 60); // 25 minutes for Pomodoro
    } else if (mode === "Short Break") {
      setTimeLeft(5 * 60); // 5 minutes for Short Break
    } else if (mode === "Long Break") {
      setTimeLeft(15 * 60); // 15 minutes for Long Break
    }
  };

  useEffect(() => {
    if (!isRunning) return; // Don't start the interval if the timer isn't running

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1; // Decrement time if it's greater than 0
        clearInterval(interval); // Clear the interval when time reaches 0
        return 0;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount or when isRunning changes
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
    <Header2/>
    <div className="flex min-h-screen">
      {/* Left Side: Image */}
      <div className="w-1/2 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/focus5.jfif')`,
        }}></div>
      {/* Right Side: Timer and Controls */}
      <div className="w-1/2 flex items-center justify-center min-h-screen bg-red-500 opacity-90">
        <div className=" bg-white bg-opacity-80 m-5 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center justify-center min-h-[400px]">
          {/* Mode Selection */}
          <div className="flex space-x-4 mb-6">
            {["Pomodoro", "Short Break", "Long Break"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setMode(item);
                  resetTimer(); // Reset the timer when changing mode
                }}
                className={`px-4 py-2 rounded ${
                  mode === item ? "bg-white text-red-500" : "bg-red-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Timer Display */}
          <div className="text-8xl text-red-500 font-bold mb-6">{formatTime(timeLeft)}</div>

          {/* Control Buttons */}
          <div className="flex space-x-4">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="bg-white text-red-500 px-6 py-3 rounded font-bold"
              >
                START
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="bg-white text-red-500 px-6 py-3 rounded font-bold"
              >
                PAUSE
              </button>
            )}
            <button
              onClick={resetTimer}
              className="bg-red-700 px-6 py-3 rounded font-bold"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div></>
    
  );
}

export default PomodoroTimer;
