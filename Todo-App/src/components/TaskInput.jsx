import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("indoor"); // Added category
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    dispatch(addTask({ id: Date.now(), name: task, priority, category })); 
    setTask("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}> 
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
