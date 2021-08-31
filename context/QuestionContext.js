// import { createContext, useEffect, useState } from "react";
// import questions from "../questions.json";
// import Modal from "../components/Modal";
// export const QuestionContext = createContext();

// export function QuestionProvider({ children }) {
//   // States
//   const [activeQuestion, setActiveQuestion] = useState(" ");
//   const [questionClick, setQuestionClick] = useState("");
//   const [correto, setCorreto] = useState(false);

//   useEffect(() => {
//     console.log(questionClick);
//   }, [questionClick]);

//   // Functions
//   function startQuestion(e) {
//     console.log("sla");
//     const randomQuestionIndex = Math.floor(Math.random() * questions.length);
//     const currentQuestion = questions[randomQuestionIndex];

//     setActiveQuestion(currentQuestion);
//   }

//   function submitQuestion(e) {
//     console.log("sla");
//     if (activeQuestion.correct === questionClick) {
//       setCorreto(true);
//     } else {
//       setCorreto(false);
//     }
//   }
//   // Render boy
//   return (
//     <QuestionContext.Provider
//       value={{
//         startQuestion,
//         activeQuestion,
//         setQuestionClick,
//         submitQuestion,
//         questionClick,
//         correto,
//       }}
//     >
//       {children}
//     </QuestionContext.Provider>
//   );
// }
