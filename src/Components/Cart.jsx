import React from "react";

import plantImage14 from "../assets/plant16.png";

import plantImage20 from "../assets/plant20.avif";
import { Link } from "react-router-dom";

export const Cart = () => {
  const products = [
    { id: 1, image: plantImage14, title: "Croton Plant", price: "$25" },
    // Add more products here
  ];

  return (
    <>
    <div className="buy-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={plantImage20} alt="Plants Banner" className="hero-banner" />
        <div className="hero-content">
          <h1>Bring Greenery to Your Home</h1>
          <p>Discover our collection of beautiful, low-maintenance plants.</p>
          <Link to ="/">
          <button className="explore-button">Back to Home</button>
          </Link>
        </div>
        
      </section>

     
  
    </div>
    
    </>
  );
  
};