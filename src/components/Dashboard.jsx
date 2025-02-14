import React from "react";
import Card from "./Card";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <Card />
    </div>
  );
};

export default Dashboard;
