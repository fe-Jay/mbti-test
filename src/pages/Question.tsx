import React, { useEffect, useState } from "react";

import Button from "@/component/Button";
import Header from "@/component/Header";
import Step from "@/component/Step";
import Watermark from "@/component/Watermark";
import { QuestionData, QuestionProps } from "@/type";

const Question: React.FC<QuestionProps> = ({
  step,
  nextStep,
  answers,
  setAnswers,
}) => {
  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    fetch("../api/questions.json")
      .then(res => res.json())
      .then((data: QuestionData[]) => {
        setData(data);
      })
      .catch(error => console.error("Error loading questions:", error));
  }, []);

  if (data.length === 0) {
    return <div>로딩중...</div>;
  }

  const { title, type, A, B } = data[step - 1] || {};

  const handleAnswer = (answer: "A" | "B") => {
    const newAnswers = { ...answers };
    console.log(answer + newAnswers);

    newAnswers[type] = answers[type] + (answer === "A" ? 1 : 0);

    setAnswers(newAnswers);
    nextStep();
  };

  return (
    <section className="flex flex-col items-center justify-center h-[calc(100svh-3rem)]">
      <h2 className="sr-only">독서모임 성격 테스트 문항</h2>
      <div className="w-full h-full max-h-[800px] bg-white border-4 border-black flex flex-col">
        <Header type="question" />
        <Step currentStep={step} totalSteps={data.length} />

        <img
          id="img"
          className="animate-bounce w-[64px] min-[376px]:w-[80px] md:w-[120px]"
          src={`../assets/icon/icon_${step}.svg`}
          alt={`step ${step}`}
        />
        <p className="py-3 md:py-10 px-5 text-left text-lg flex-[1_0_0%] md:text-2xl">
          {title}
        </p>

        <div className="px-5 flex-[1_1_0%] flex flex-col justify-center">
          <Button
            type="button"
            subject={A}
            design="stroke"
            size="lg"
            onClick={() => {
              handleAnswer("A");
            }}
          />
          <Button
            type="button"
            subject={B}
            design="stroke"
            size="lg"
            onClick={() => {
              handleAnswer("B");
            }}
          />
        </div>
        <Watermark size="sm" />
      </div>
    </section>
  );
};

export default Question;
