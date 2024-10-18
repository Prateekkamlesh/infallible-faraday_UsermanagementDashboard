import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1>Welcome to User Management Dashboard</h1>
      <p>
        Manage users, view profiles, and access settings from your dashboard.
      </p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
