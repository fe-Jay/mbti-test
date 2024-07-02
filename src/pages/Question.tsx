import React, { useState } from "react";

import Button from "@/component/Button";
import Step from "@/component/Step";

type QuestionProps = {
  step: number;
  nextStep: () => void;
};

const Question: React.FC<QuestionProps> = ({ step, nextStep }) => {
  return (
    <>
      <p>{step}</p>
      <h2>문항이 이렇게이렇게</h2>

      <Button
        type="button"
        subject="A"
        design="black"
        onClick={() => {
          nextStep();
        }}
      />
      <Button
        type="button"
        subject="B"
        design="black"
        onClick={() => {
          nextStep();
        }}
      />
    </>
  );
};

export default Question;
