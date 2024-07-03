import React from "react";

import { StepProps } from "@/type";

const Step: React.FC<StepProps> = ({ currentStep, totalSteps }) => {
  return (
    <article className="pt-8 pb-10">
      <h3 className="inline-block bg-black text-white px-5 py-1 rounded-3xl text-sm">
        {currentStep} / {totalSteps}
      </h3>
    </article>
  );
};

export default Step;
