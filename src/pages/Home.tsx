import React, { useState } from "react";

import Button from "@/component/Button";
import Question from "@/pages/Question";

const Home: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{}>({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  });

  const nextStep = () => setStep(prev => prev + 1);
  const reStart = () => {
    setStep(0);
    setAnswers({ EI: 0, SN: 0, TF: 0, JP: 0 });
  };

  return (
    <>
      <h2>TestPage</h2>

      <div>
        {step === 0 && (
          <Button
            type="button"
            subject="테스트 시작하기"
            design="black"
            onClick={() => {
              nextStep();
            }}
          />
        )}
        {step > 0 && step < 13 && (
          <Question step={step} nextStep={nextStep}></Question>
        )}
      </div>
    </>
  );
};

export default Home;
