import React from "react";

type StepProps = {
  step: number;
};

const Step: React.FC<StepProps> = ({ step }) => {
  return (
    <div>
      <h3>{step}/13</h3>
      <button>다음</button>
    </div>
  );
};

export default Step;
