import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for new task input

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex min-h-screen bg-red-500 ">
      {/* Left Side: Image */}
      <div
        className="w-1/2 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/focus5.jfif')`,
        }}
      ></div>
      
      {/* Right Side: To-Do List */}
      <div className="w-1/2 min-h-screen bg-gray-100 flex items-center justify-center bg-white ">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-md outline outline-2 outline-red-500 ">
          <h1 className="text-3xl font-bold text-red-700 text-center mb-4">
            To-Do List
          </h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 p-2 border rounded-l"
            />
            <button
              onClick={addTask}
              className="bg-red-500 text-white p-2 rounded-r hover:bg-red-600"
            >
              Add
            </button>
          </div>
          <ul className="mt-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 border-b ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <span
                  onClick={() => toggleTask(index)}
                  className="cursor-pointer flex-1"
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default ToDo;
