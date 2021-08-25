import Layout from "../components/Layout";
import ButtonGreen from "../components/ButtonGreen";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import ButtonSign from "../components/Sign";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const Index = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="max-w-full max-h-screen">
      <div className="max-w-full h-16 bg-white items-center flex px-52 justify-between border-b-2 border-black">
        <span className="text-black text-xl">beta</span>
        <div className="flex justify-center items-center ">
          <div className="block ">
            {enabled ? (
              <SunIcon className=" block w-6 h-6" />
            ) : (
              <MoonIcon className="block w-6 h-6" />
            )}
          </div>
          <div className="block">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? `bg-white` : "bg-gray-200"
              }    items-center h-7 rounded-full w-12 ease-in-out transition-colors duration-200`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } flex w-5 h-5 transform bg-black rounded-full ease-in-out duration-200 shadow-lg`}
              />
            </Switch>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center mt-48   ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl mb-10">
            O jeito grátis, divertido e eficaz de aprender um idioma!
          </h2>
          <button>Comece Agora</button>
          <ButtonSign TextButton={"Ja tenho uma conta"} />
        </div>
      </div>
    </div>
  );
};

export default Index;
