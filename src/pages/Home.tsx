import React, { useState } from "react";

import Button from "@/component/Button";
import Question from "@/pages/Question";
import { AnswerType } from "@/type";

import Intro from "./Intro";
import Result from "./Result";

const Home: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerType>({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  });

  const nextStep = () => {
    setStep(prev => prev + 1);
    console.log(step, answers);
  };
  const reStart = () => {
    setStep(0);
    setAnswers({ EI: 0, SN: 0, TF: 0, JP: 0 });
  };

  return (
    <>
      {/* 시작 */}
      {step === 0 && <Intro nextStep={nextStep} />}

      {/* 테스트 진행 */}
      {step > 0 && step < 13 && (
        <Question
          step={step}
          nextStep={nextStep}
          answers={answers}
          setAnswers={setAnswers}
        ></Question>
      )}

      {/* 테스트 완료 */}
      {step === 13 && <Result answers={answers} reStart={reStart} />}
    </>
  );
};

export default Home;
