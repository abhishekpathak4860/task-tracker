import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import { fetchWeather } from "../utils/api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const tasks = useSelector((state) => state.tasks.tasks) || [];
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(""); // State for city input
  const [selectedCity, setSelectedCity] = useState(""); // Stores city name after form submission

  useEffect(() => {
    if (!isAuthenticated) return; // Prevent fetching if not logged in

    const outdoorTask = tasks.find((task) => task.category === "outdoor");
    if (outdoorTask && selectedCity) {
      fetchWeather(selectedCity).then((data) => setWeatherData(data));
    }
  }, [tasks, selectedCity, isAuthenticated]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    setSelectedCity(city);
  };

  if (!isAuthenticated) {
    return <p>Please log in to view your tasks.</p>;
  }

  return (
    <div className="tasklist">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="tasklist-ul">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={() => dispatch(deleteTask(task.id))} />
          ))}
        </ul>
      )}
<div className="weather" >
      <div >
        <h3>Check Weather for Outdoor Tasks</h3>
        <form onSubmit={handleCitySubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>

      {weatherData && (
        <div>
          <h3>Weather Update for {selectedCity}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default TaskList;
