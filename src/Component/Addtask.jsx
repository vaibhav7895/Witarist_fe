import React, { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Completed");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.post(
        "http://localhost:3000/taskRouter/add",
        {
          taskname,
          description,
          status,
          date,
          priority,
          category,
        }
      );
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Error adding task. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>
      <div className="mb-4">
        <label
          htmlFor="task"
          className="block text-sm font-medium text-gray-700"
        >
          Task
        </label>
        <input
          type="text"
          id="task"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Task"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Description"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Completed</option>
          <option>Not Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Due Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700"
        >
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Low</option>
          <option>Medium </option>
          <option>High </option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Choose Category</option>
          <option>personal</option>
          <option>work</option>
          <option>study</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        {loading ? "Adding Task..." : "Add Task"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && (
        <p className="text-green-500 mt-2">Task added successfully!</p>
      )}
    </div>
  );
};

export default AddTask;
