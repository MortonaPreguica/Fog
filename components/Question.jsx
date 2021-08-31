import { useEffect, useState } from "react";
import ButtonGreen from "./ButtonGreen";
import ReportButton from "./ReportButton";
import Confirm from "./Confirm";
import QuestionList from "../questions";
import ProgressBar from "./ProgressBar";
import FinishTela from "./FinishTela";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Question = () => {
  // States
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionClick, setQuestionClick] = useState(false);
  const [correto, setCorreto] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const [acertadas, setAcertadas] = useState(0);
  // Functions
  useEffect(() => {
    console.log(questionClick);
    console.log(showFinish);
  }, [questionClick, showFinish]);

  function submitQuestion(e) {
    if (QuestionList[currentQuestion].correct === questionClick) {
      setCorreto(true);
      setAcertadas(acertadas + 1);
    } else {
      setCorreto(false);
    }
    setShowNext(true);
  }

  function bringQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setQuestionClick(false);
    setCorreto(false);
    setShowNext(false);
  }

  return (
    <>
      {showFinish && <FinishTela acertadas={acertadas} />}
      <div className="p-10 w-full h-full text-center">
        <ProgressBar currentQuestion={currentQuestion} />
        <h2 className=" m-12 text-2xl mb-32">
          {QuestionList[currentQuestion].question}
        </h2>
        {QuestionList[currentQuestion].answers.map((text, index) => (
          <button
            key={index}
            className={classNames(
              text === questionClick && "border-green-300",
              "p-3 text-lg border-2 border-gray-300 rounded-lg m-3  "
            )}
            onClick={() => setQuestionClick(text)}
          >
            {text}
          </button>
        ))}
      </div>
      <div className="flex absolute bottom-0 justify-around w-full h-20 items-center border-2 border-gray-300 ">
        <ReportButton>Report</ReportButton>
        <ButtonGreen
          submitQuestion={submitQuestion}
          questionClick={questionClick}
        >
          Check
        </ButtonGreen>
      </div>
      {showNext && (
        <Confirm
          correto={correto}
          bringQuestion={bringQuestion}
          setShowFinish={setShowFinish}
          currentQuestion={currentQuestion}
        />
      )}
    </>
  );
};

export default Question;
