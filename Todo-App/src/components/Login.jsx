import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authentication";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login()); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login to Access To-Do App(Mock)</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
