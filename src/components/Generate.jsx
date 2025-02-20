import React, { useState } from "react";
import Header from "./Header";
import { SpeechProvider } from "../context/SpeechContext"; // Import Context Provider
import RecordBtn from "./RecordBtn";
import DisplayText from "./DisplayText";
import Loading from "./Loading";
import "../css/Generate.css";

const Generate = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility

  const models = ["Dall-E", "Stable Diffusion", "Midjourney", "Leonardo AI"];
  const src = [
    "https://dlcdnwebimgs.asus.com/files/media/F6CF59BB-5907-40FB-90D4-C5AC6BA01EC0/v11/img/bg/lg/s3_bg_2.jpg",
    "https://a.d-cd.net/6f6d3g4l4e-1920.jpg",
    "https://avatars.dzeninfra.ru/get-zen_doc/4426010/pub_63f2559197c8c1465fd5c59c_63f2591e207f8f08e7cb466a/scale_1200",
    "https://cdn.digitbin.com/wp-content/uploads/Cat-Leonardo-AI.png",
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
                <div key={index} className="gen-card">
                  <h3>{item.model}</h3>
                  <div className="genImg-con">
                    <img src={item.src} alt={item.model} className="genImg" />
                  </div>
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
            <Loading />
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
