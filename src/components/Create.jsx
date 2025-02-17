import React from "react";
import Generate from "./Generate";
import "../css/Create.css";

const Create = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Hi There!</h2>
        <p>What type of image are you looking to create?</p>

        {/* Buttons */}
        <div className="button-group">
          <a href="/generate">
            <button className="btn img-btn">Generate </button>
          </a>
        </div>

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Create;
