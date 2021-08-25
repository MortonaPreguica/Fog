import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

export default function ButtonNext({ children, onClick }) {
  const { startQuestion } = useContext(QuestionContext);
  return (
    <button
      className="
          bg-green-500 text-white hover:bg-green-400 text-lg  p-1  w-72 rounded-lg shadow-md font-semibold
      "
      onClick={() => startQuestion()}
    >
      {children}
    </button>
  );
}
