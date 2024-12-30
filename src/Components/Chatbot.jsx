import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";

export function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const geminiApiKey = "AIzaSyBkWc7tGDCaoG49HMXW7nj8bxhFt-0akSA"; // Replace with your actual API key
  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);
    try {
      const result = await model.generateContent(prompt);
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setResponse("Failed to get a response. Please try again.");
    } finally {
      setLoading(false);
      setPrompt(""); // Clear the input box after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <>
      <center>
        <div className="chatbot-container">
          <h1>Plantify's Chatbot</h1>
          <textarea
            className="chatbot-textarea"
            placeholder="Ask your Questions here.."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="chatbot-button"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Loading..." : "Send"}
          </button>
          <div className="chatbot-response">
            <h3>Response:</h3>
            <p>{response}</p>
          </div>
        </div>
        <Link to="/">
          <button className="explore-button">Back to Home</button>
        </Link>
      </center>
    </>
  );
}