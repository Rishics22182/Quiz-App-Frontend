import React from "react";

function Question({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionIndex,
  onOptionChange,
  onNext,
  isLastQuestion
}) {
  return (
    <>
      <div className="question-header">
        <span className="question-number">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index} className="option-item">
            <label className="option-label">
              <input
                type="radio"
                name={`question-${currentIndex}`}
                value={index}
                checked={selectedOptionIndex === index}
                onChange={() => onOptionChange(index)}
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>

      <button
        className="btn"
        onClick={onNext}
        disabled={selectedOptionIndex === null}
      >
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </>
  );
}

export default Question;