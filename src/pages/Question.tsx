import React, { useState, useEffect } from "react";

import Button from "@/component/Button";
import Step from "@/component/Step";
import { QuestionProps, QuestionData } from "@/type";


const Question: React.FC<QuestionProps> = ({ step, nextStep, answers, setAnswers }) => {
  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    fetch('../api/questions.json')
      .then((res) => res.json())
      .then((data: QuestionData[]) => {
        setData(data);
      })
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  if (data.length === 0) {
    return <div>로딩중...</div>;
  }

  const { title, type, A, B } = data[step - 1] || {};
  
  const handleAnswer = (answer: 'A' | 'B') => {
    const newAnswers = { ...answers };
    console.log(answer + newAnswers);

    newAnswers[type] = answers[type] + (answer === 'A' ? 1 : 0);

    setAnswers(newAnswers);
    nextStep();
  };

  return (
    <>
      <Step currentStep={step} totalSteps={data.length}/>
      <h2>{title}</h2>

      <Button
        type="button"
        subject={A}
        design="black"
        onClick={() => {
          handleAnswer('A');
        }}
      />
      <Button
        type="button"
        subject={B}
        design="black"
        onClick={() => {
          handleAnswer('B');
        }}
      />
    </>
  );
};

export default Question;
