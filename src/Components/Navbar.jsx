import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Effect to update CSS variables on mount and when theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--background-color",
      isDarkMode ? "#112012" : "#ffffff"
    );
    root.style.setProperty(
      "--text-color",
      isDarkMode ? "#c4ed2f" : "#3e4a0f"
    );
  }, [isDarkMode]);

  // Toggle Theme Function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    
    <nav className="nav">
      <ul className="c3">
        <li>
          <a className="brand" href="#home">Plantify</a>
        </li>
        <li className="search-container">
          
          <input
            type="text"
            placeholder="Search plants..."
            className="search-bar"
          />
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#plant">Plant</a>
        </li>
       
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <Link to="/cart">
            <a href="#cart">Cart</a>
          </Link>
        </li>
        <li>
          <Link to="/chatbot">
            <a href="#chatbot">Chatbot</a>
          </Link>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
