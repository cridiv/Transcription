import React, { useState } from "react";
import ImageCard from "./ImageCard";
import "../css/Card.css";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const images = [
        {
          id: 1,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw314z5LqF_pmFOZWDNOjnvuFZyBCI0JAFWg&s",
          time: "11:50",
        },
      ];

      setTimeout(() => {
        setCards(images);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError("Error fetching images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-container">
      <div className="image-display-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && cards.length === 0 && (
          <p>No images yet. Click Generate!</p>
        )}

        {cards.map((card) => (
          <ImageCard key={card.id} imageUrl={card.imageUrl} time={card.time} />
        ))}
      </div>

      <button className="generate-button" onClick={generateImages}>
        Generate
      </button>
    </div>
  );
};

export default Card;
