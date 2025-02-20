import React from "react";
import "../css/Loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="glass-box">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
