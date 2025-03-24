import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Login from "./components/Login";
import { logout } from "./redux/authentication";
import "./App.css"; 

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
