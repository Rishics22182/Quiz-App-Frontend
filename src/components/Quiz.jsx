import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1
  },
  {
    question: "Which React hook is used to manage state in a functional component?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correctAnswer: 0
  },
  {
    question: "Which HTML tag is used to include JavaScript code?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    correctAnswer: 2
  },
  {
    question: "In React, components should ideally be:",
    options: [
      "Large and do many things",
      "Small and focused on a single task",
      "Written only as classes",
      "Written only as functions"
    ],
    correctAnswer: 1
  }
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;

    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <Result
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <Question
        question={currentQuestion}
        currentIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        selectedOptionIndex={selectedOptionIndex}
        onOptionChange={handleOptionChange}
        onNext={handleNext}
        isLastQuestion={currentQuestionIndex === totalQuestions - 1}
      />
    </div>
  );
}

export default Quiz;