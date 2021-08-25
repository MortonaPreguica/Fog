import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ButtonGreen({ children, onClick }) {
  const { questionClick } = useContext(QuestionContext);
  return (
    <button
      className={classNames(
        questionClick
          ? "bg-green-500 text-white hover:bg-green-400"
          : "bg-gray-500 text-gray-400",
        "text-lg  p-1  w-72 rounded-lg shadow-md font-semibold"
      )}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
}
