import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Plants } from "./Components/Plants";
import { Cart } from "./Components/Cart";
import { Buy } from "./Components/Buy";
import { Home } from "./Components/Home";
import { More } from "./Components/More";
import { Chatbot } from "./Components/Chatbot";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="more" element={<More />} />
        <Route
          path="cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="plants" element={<Plants addToCart={addToCart} />} />
        <Route path="chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;
