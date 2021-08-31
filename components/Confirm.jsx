import QuestionList from "../questions";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Confirm({
  correto,
  bringQuestion,
  setShowFinish,
  currentQuestion,
}) {
  return (
    <div
      className={classNames(
        correto ? "bg-green-300" : "bg-red-300",
        "flex absolute bottom-0 justify-around w-full h-20 items-center"
      )}
    >
      {!correto && (
        <div>
          <h4>A resposta correta era: </h4>
          <p>{QuestionList[currentQuestion].correct}</p>
        </div>
      )}
      <button
        className={classNames(correto ? "bg-green-400" : "bg-red-400")}
        onClick={
          currentQuestion + 1 === QuestionList.length
            ? () => setShowFinish(true)
            : bringQuestion
        }
      >
        {currentQuestion + 1 === QuestionList.length ? "Finalizar" : "Next"}
      </button>
    </div>
  );
}
