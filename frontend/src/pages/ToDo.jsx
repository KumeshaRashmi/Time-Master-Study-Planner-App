import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from "../components/Header2";

function ToDo() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for new task input

  // Fetch tasks from the backend on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data); // Set tasks from backend
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task by sending POST request
  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const response = await axios.post("http://localhost:5000/api/tasks", {
          text: newTask,
        });
        setTasks([...tasks, response.data]); // Add new task to the list
        setNewTask(""); // Reset the input
      } catch (error) {
        console.error("Error adding task", error);
      }
    }
  };

  // Toggle task completion by sending PUT request
  const toggleTask = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${id}/toggle`
      );
      const updatedTasks = tasks.map((task) =>
        task._id === id ? response.data : task
      );
      setTasks(updatedTasks); // Update the task list with the toggled task
    } catch (error) {
      console.error("Error toggling task", error);
    }
  };

  // Delete a task by sending DELETE request
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks); // Remove task from the list
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <><Header2/>
    <div className="flex min-h-screen bg-red-500">
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
            {tasks.map((task) => (
              <li
                key={task._id}
                className={`flex justify-between items-center p-2 border-b ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <span
                  onClick={() => toggleTask(task._id)}
                  className="cursor-pointer flex-1"
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div></>
  
  );
}

export default ToDo;
