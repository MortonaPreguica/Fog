import {
  LightningBoltIcon,
  CurrencyDollarIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import QuestionList from "../questions";

const FinishTela = ({ acertadas }) => {
  const aproveitamento = Math.floor((acertadas / QuestionList.length) * 100);

  return (
    <div className="bg-gray-100 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-white rounded-2xl py-5 px-3 shadow-xl  flex flex-col items-center relative ">
        <h3 className="text-xl text-green-400 font-semibold">
          Parabéns, você completou!
        </h3>
        {/* <img src="" alt="" /> */}
        <div className="flex mt-12 m-2">
          <LightningBoltIcon className="h-6 w-6 text-yellow-400 mr-2" />
          <p className="text-lg"> 15</p>
        </div>
        <div className="flex m-2">
          <CurrencyDollarIcon className="h6 w-6 mr-2" />
          <p>5</p>
        </div>
        <div className="flex m-2">
          <CheckIcon className="h6 w-6 mr-2 text-green-500" />
          <p className="text-lg ">{aproveitamento}%</p>
        </div>
        <Link href="/learn">
          <a className="text-lg text-center p-1  w-72 rounded-lg shadow-md font-semibold bg-green-500 hover:bg-green-400 text-white absolute -bottom-4 cursor-pointer ">
            Voltar
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FinishTela;
