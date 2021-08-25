import { SpeakerphoneIcon } from "@heroicons/react/outline";

export default function ReportButton({ children }) {
  return (
    <button className="flex justify-evenly px-3  py-1 bg-gray-400 text-lg w-72 rounded-lg shadow-md font-semibold transition duration-200 ease-in-out hover:bg-red-600 ">
      {children} <SpeakerphoneIcon className="w-6 h-6" />
    </button>
  );
}
