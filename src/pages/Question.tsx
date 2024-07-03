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
    <section className="flex flex-col items-center justify-center h-[calc(100lvh-4rem)]">
      <h2 className="sr-only">독서모임 성격 테스트 문항</h2>
      <div className="w-full h-full bg-white border-4 border-black flex flex-col">
        <Header type="question" />
        <Step currentStep={step} totalSteps={data.length} />

        <img
          id="img"
          className="animate-bounce"
          src={`../assets/icon/icon_${step}.svg`}
          alt={`step ${step}`}
        />
        <p className="py-3 lg:py-10 px-5 text-left text-lg flex-[1_0_0%] lg:text-2xl">
          {title}
        </p>

        <div className="px-5 flex-[1_0_0%]">
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
          <Watermark />
        </div>
      </div>
    </section>
  );
};

export default Question;
