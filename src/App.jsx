import React from "react";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="quiz-container">
        <h1>Quiz App</h1>
        <Quiz/>
      </div>
    </div>

  );
}

export default App;