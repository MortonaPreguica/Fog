import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../context/QuestionContext";
import ButtonGreen from "./ButtonGreen";
import ReportButton from "./ReportButton";
import Confirm from "./Confirm";

const Question = () => {
  // Context
  const {
    activeQuestion,
    startQuestion,
    setQuestionClick,
    submitQuestion,
    questionClick,
    correto,
  } = useContext(QuestionContext);

  // States

  // Chamar as questões
  useEffect(() => {
    startQuestion();
    console.log(activeQuestion);
  });

  return (
    <>
      <p>baby</p>
      <h4>{activeQuestion.question}</h4>

      {activeQuestion.answers.map((text, index) => (
        <button
          key={index}
          className="text-xl text-black"
          onClick={() => setQuestionClick(text)}
        >
          {text}
        </button>
      ))}
      <div className="flex absolute bottom-0 justify-around w-full h-20 items-center px- bg-yellow-300 ">
        <ReportButton>Report</ReportButton>
        <ButtonGreen onClick={submitQuestion()}>Check</ButtonGreen>
      </div>
      <Confirm />
    </>
  );
};

export default Question;
