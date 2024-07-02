import React from "react";
import { StepProps } from "@/type";

const Step: React.FC<StepProps> = ({ currentStep, totalSteps }) => {
  return (
    <div>
      <h3>{currentStep}/{totalSteps}</h3>
    </div>
  );
};

export default Step;
