import React, { useState } from "react";
import Header from "./Header";
import { SpeechProvider } from "../context/SpeechContext"; // Import Context Provider
import RecordBtn from "./RecordBtn";
import DisplayText from "./DisplayText";
import "../css/Generate.css";

const Generate = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility

  const models = ["Dall-E", "Stable Diffusion", "Midjourney", "Leonardo AI"];
  const src = [
    "https://i.pinimg.com/736x/de/ae/8c/deae8c4c648d612b07a4b57d4584d708.jpg",
    "https://cdn-bnofo.nitrocdn.com/YCOqbulOWPTbigaUOflqfvBCmkFuxfWf/assets/images/optimized/rev-cd531fc/www.wepc.com/wp-content/uploads/2023/06/Is-Stable-Diffusion-free-389x.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEHUwG-VxXuV2U_rnT0ZEN0HGsY-1A_3TGA&s",
    "https://dlcdnwebimgs.asus.com/files/media/F6CF59BB-5907-40FB-90D4-C5AC6BA01EC0/v11/img/bg/lg/s3_bg_2.jpg",
  ];

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const combined = models.map((model, index) => ({
    model,
    src: src[index],
  }));

  return (
    <>
      <div className="gen-container">
        <Header className="head" />
        <div className="gen-content">
          <div className="gen-head">
            <h1>Model</h1>
            <p>Which style are you looking to create?</p>

            <div className="genModel">
              {combined.map((item, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <h3>{item.model}</h3>
                  <img
                    src={item.src}
                    alt={item.model}
                    style={{ width: "300px", height: "auto" }}
                  />
                </div>
              ))}
            </div>

            <div className="gen-des">
              <p>Prompt</p>
              <div className="gen-inputs">
                <SpeechProvider>
                  <textarea
                    name="prompt"
                    id="prompt"
                    cols="30"
                    rows="4"
                    placeholder="Enter your prompt here"
                    value={inputText}
                    onChange={handleChange}
                  ></textarea>
                  <DisplayText text={inputText} />
                  <RecordBtn />
                </SpeechProvider>
              </div>
            </div>

            {/* Centered Generate Button */}
            <div className="gen-btn-container">
              <button className="gen-btn" onClick={() => setShowPopup(true)}>
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Generating your style...</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Generate;
