import React, { useState, useEffect } from "react";

import plantImage1 from "../assets/plant3.png";
import plantImage2 from "../assets/plant4.png";
import plantImage3 from "../assets/plant5.png";
import plantImage4 from "../assets/plant6.png";
import plantImage5 from "../assets/plant7.png";
import plantImage6 from "../assets/plant8.png";
import plantImage7 from "../assets/plant9.png";
import plantImage8 from "../assets/plant10.png";
import plantImage9 from "../assets/plant11.png";
import plantImage10 from "../assets/plant12.png";
import plantImage11 from "../assets/plant13.png";
import plantImage12 from "../assets/plant14.png";
import plantImage13 from "../assets/plant15.png";
import plantImage14 from "../assets/plant16.png";
import plantImage15 from "../assets/plant17.png";
import plantImage16 from "../assets/plant18.png";
import { Link } from "react-router-dom";

export const Plants = () => {
  const [showMore, setShowMore] = useState(false);
  const [cart, setCart] = useState([]);

  const initialCards = [
    { id: 1, image: plantImage1, title: "Croton Plant", description: "Add a touch of greenery to your home." },
    { id: 2, image: plantImage2, title: "Zamioculcas", description: "Perfect for beginners, low maintenance." },
    { id: 3, image: plantImage3, title: "Chrysanthemum", description: "A beautiful addition to purify the air." },
    { id: 4, image: plantImage4, title: "Buxus", description: "A vibrant plant to enhance your space." },
    { id: 5, image: plantImage5, title: "Peace Lily", description: "A bold plant for any room." },
    { id: 6, image: plantImage6, title: "Aglaonema", description: "Low-maintenance and beautiful." },
    { id: 7, image: plantImage7, title: "Succulen", description: "A bold plant for any room." },
    { id: 8, image: plantImage8, title: "Heartleaf", description: "Low-maintenance and beautiful." },
  ];

  const additionalCards = [
    { id: 9, image: plantImage9, title: "Areca palm", description: "Purifies air and adds beauty." },
    { id: 10, image: plantImage10, title: "Aloe Vera", description: "Brings life to your home." },
    { id: 11, image: plantImage11, title: "Cereus", description: "Low-maintenance and aesthetic." },
    { id: 12, image: plantImage12, title: "Dieffenbachia", description: "Vibrant plant for any room." },
    { id: 13, image: plantImage13, title: "Hydrangea", description: "Perfect for workspaces." },
    { id: 14, image: plantImage14, title: "Succulen", description: "Great for improving air quality." },
    { id: 15, image: plantImage15, title: "Fern", description: "Great for improving air quality." },
    { id: 16, image: plantImage16, title: "Freesia", description: "Great for improving air quality." },
  ];

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  const handleAddToCart = (card) => {
    setCart((prevCart) => [...prevCart, card]);
    alert('Plant has been added to the cart!');
  };

  const displayedCards = showMore ? [...initialCards, ...additionalCards] : initialCards;

 

    

  return (
    <div className="plants-container" id="plant">
      <div className="card-container">
        {displayedCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to="/buy">
                <button className="buy-button">Buy</button>
              </Link>
              <button className="buy-button" onClick={() => handleAddToCart(card)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <center>
        <button className="buy-button" onClick={handleToggle}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </center>

      {/* Displaying the cart */}
      <div className="cart-section">
        {/* Cart content */}
      </div>
    </div>
  );
};
