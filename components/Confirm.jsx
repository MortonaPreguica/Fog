import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Confirm({ children }) {
  const { correto } = useContext(QuestionContext);
  return (
    <div
      className={classNames(
        correto ? "bg-green-300" : "bg-red-300",
        "flex absolute bottom-0 justify-around w-full h-20 items-center"
      )}
    >
      <button className={classNames(correto ? "bg-green-400" : "bg-red-400")}>
        Next
      </button>
    </div>
  );
}
