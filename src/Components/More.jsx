import React from "react";
import plantImage7 from "../assets/plant1.png";
import plantImage8 from "../assets/plant2.png";
import plantImage9 from "../assets/plant3.png";
import plantImage10 from "../assets/plant4.png";
import plantImage11 from "../assets/plant7.png";
import plantImage12 from "../assets/plant6.png";
import { Link } from "react-router-dom";

export const More = () => {
  return (
    <>
      <div className="card-container" id="more-plants">
        <div className="card">
          <img src={plantImage7} alt="Plant" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Aloe Vera</h3>
            <p className="card-description">
              A beautiful addition to your home that also purifies the air.
            </p>
            <Link to="/buy">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={plantImage8} alt="Plant" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Areca Palm</h3>
            <p className="card-description">
              A beautiful addition to your home that also purifies the air.
            </p>
            <Link to="/buy">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={plantImage9} alt="Plant" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Ficus</h3>
            <p className="card-description">
              A low-maintenance addition to enhance your living space.
            </p>
            <Link to="/buy">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={plantImage10} alt="Plant" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Calathea</h3>
            <p className="card-description">
              A bold, vibrant plant that livens up any room.
            </p>
            <Link to="/buy">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={plantImage11} alt="Plant" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Dracaena</h3>
            <p className="card-description">
              Perfect for offices, bringing life to workspaces.
            </p>
            <Link to="/buy">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src={plantImage12} alt="Plant" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Snake Plant</h3>
            <p className="card-description">
              Great for improving air quality indoors.
            </p>
            <Link to="/buy">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        </div>
      </div>

      <center>
        <Link to="/">
          <button>Back</button>
        </Link>
      </center>
    </>
  );
};