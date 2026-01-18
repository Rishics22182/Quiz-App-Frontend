import React from "react";

function Result({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div>
      <h1>Quiz Result</h1>
      <p>
        Your Score: <strong>{score}</strong> / {totalQuestions}
      </p>
      <p>
        Percentage: <strong>{percentage}%</strong>
      </p>
      <button className="btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;