import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Toggle Menu Function
  const toggleMenu = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-header">
        {/* Brand Name */}
        <a className="brand" href="#home">Plantify</a>
        
        {/* Hamburger Button */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      
      {/* Navigation Links */}
      <ul className={`c3 ${menuOpen ? "menu-open" : ""}`}>
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
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link>
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
