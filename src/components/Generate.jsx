import React, { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { useSpeech } from "../context/SpeechContext";
import RecordBtn from "./RecordBtn";
import Loading from "./Loading";
import { FaDownload } from "react-icons/fa";
import { fetchImages } from "../api/imageService";
import "../css/Generate.css";

const Generate = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [inputText, setInputText] = useState("");

  const { speechText } = useSpeech();

  useEffect(() => {
    if (speechText) {
      setInputText((prev) => (prev ? `${prev} ${speechText}` : speechText));
    }
  }, [speechText]);

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      alert("Please enter a prompt before generating.");
      return;
    }

    setLoading(true);
    setShowPopup(true);
    setGeneratedImage(null);

    try {
      const images = await fetchImages(inputText);
      if (images.length > 0) {
        setGeneratedImage(images[0].imageUrl);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "generated_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const models = ["DALL-E", "Stable Diffusion", "Midjourney", "Leonardo AI"];
  const modelImages = [
    "https://dlcdnwebimgs.asus.com/files/media/F6CF59BB-5907-40FB-90D4-C5AC6BA01EC0/v11/img/bg/lg/s3_bg_2.jpg",
    "https://a.d-cd.net/6f6d3g4l4e-1920.jpg",
    "https://avatars.dzeninfra.ru/get-zen_doc/4426010/pub_63f2559197c8c1465fd5c59c_63f2591e207f8f08e7cb466a/scale_1200",
    "https://cdn.digitbin.com/wp-content/uploads/Cat-Leonardo-AI.png",
  ];

  return (
    <>
      <div className="gen-container">
        <Header className="head" />
        <div className="gen-content">
          <div className="gen-head">
            <h1>Model</h1>
            <p>Which style are you looking to create?</p>

            <div className="genModel">
              {models.map((model, index) => (
                <div key={index} className="gen-card">
                  <h3>{model}</h3>
                  <div className="genImg-con">
                    <img
                      src={modelImages[index]}
                      alt={model}
                      className="genImg"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="gen-des">
              <p>Prompt</p>
              <div className="gen-inputs">
                <textarea
                  name="prompt"
                  id="prompt"
                  cols="30"
                  rows="4"
                  placeholder="Enter your prompt here"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <RecordBtn />
              </div>
            </div>

            <div className="gen-btn-container">
              <button className="gen-btn" onClick={handleGenerate}>
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {loading ? (
              <Loading />
            ) : generatedImage ? (
              <div className="img-card">
                <img
                  src={generatedImage}
                  alt="Generated"
                  className="generated-image"
                />
                <div className="download-button" onClick={handleDownload}>
                  <FaDownload />
                </div>
              </div>
            ) : (
              <p>Failed to generate image. Try again.</p>
            )}
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
