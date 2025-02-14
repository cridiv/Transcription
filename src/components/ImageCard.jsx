import React from "react";
import { FaDownload } from "react-icons/fa";
import "../css/ImageCard.css";

const ImageCard = ({ imageUrl, time }) => {
  const downloadImage = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-generated-image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="image-card">
      {/* Image Wrapper with Gradient Border */}
      <div className="image-wrapper">
        <img src={imageUrl} alt="AI Generated" className="image" />
      </div>

      {/* Timestamp */}
      <p className="time">{time}</p>

      {/* Download Button */}
      <div className="download-button" onClick={downloadImage}>
        <FaDownload />
      </div>
    </div>
  );
};

export default ImageCard;
