export type AnswerType = {
  EI: number,
  SN: number,
  TF: number,
  JP: number,
};

export type StepProps = {
  currentStep: number;
  totalSteps: number;
};

export type IntroProps = {
  nextStep: () => void;
};

export type QuestionProps = {
  step: number;
  nextStep: () => void;
  answers: AnswerType;
  setAnswers: (answers: AnswerType) => void;
};

export type QuestionData = {
  step: number;
  title: string;
  type: keyof AnswerType;
  A: string;
  B: string;
}

export type ResultProps = {
	answers: AnswerType;
	reStart: () => void;
};

