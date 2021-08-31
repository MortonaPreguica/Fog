import QuestionList from "../questions";
import { XIcon } from "@heroicons/react/outline";
const ProgressBar = ({ currentQuestion }) => {
  const percent = ((currentQuestion + 1) / QuestionList.length) * 100;

  return (
    <div className="flex w-full m-2 items-center">
      <a href="">
        <XIcon className="w-6 h-6 mr-2" />
      </a>
      <div className="w-full h-4 bg-gray-500 rounded-full ">
        <div
          style={{ width: `${percent}%` }}
          className="bg-green-500 h-4 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
