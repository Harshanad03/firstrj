
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { Buy } from "./Components/Buy";
import { Home } from "./Components/Home";
import { More } from "./Components/More";
import { Chatbot } from "./Components/Chatbot";

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="more" element={<More />} />
        <Route path="cart" element={<Cart />} />
        <Route path="chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;
