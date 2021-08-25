import React from "react";
import Layout from "../../components/Layout";
import Question from "../../components/Question";
import { QuestionProvider } from "../../context/QuestionContext";

const Learn = () => {
  return (
    <QuestionProvider>
      <Layout>
        <div className=" max-h-screen my-0 mx-auto max-w-5xl flex flex-col items-center ">
          {/*ProgressBar */}
          <Question />
        </div>
      </Layout>
    </QuestionProvider>
  );
};

export default Learn;
