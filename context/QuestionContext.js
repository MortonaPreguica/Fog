import { createContext, useEffect, useState } from "react";
import questions from "../questions.json";
import Modal from "../components/Modal";
export const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  // States
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionClick, setQuestionClick] = useState(false);
  const [correto, setCorreto] = useState(null);

  {
    /*useEffect(() => {

  }, [questionClick])*/
  }

  // Functions
  function startQuestion(e) {
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomQuestionIndex];

    setActiveQuestion(currentQuestion);
  }

  function submitQuestion(e) {
    if (activeQuestion.correct === questionClick) {
      setCorreto(true);
    } else {
      setCorreto(false);
    }
  }
  // Render boy
  return (
    <QuestionContext.Provider
      value={{
        startQuestion,
        activeQuestion,
        setQuestionClick,
        submitQuestion,
        questionClick,
        correto,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
