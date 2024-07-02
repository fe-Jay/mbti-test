import React from "react";
import Button from '@/component/Button';

import { IntroProps } from "@/type";

const Intro: React.FC<IntroProps> = ({ nextStep }) => {
	return	(
		<>
      <h2>테스트 시작하기</h2>
      <Button
        type="button"
        subject="테스트 시작하기"
        design="black"
        onClick={() => {
        nextStep();
        }}
      />
    </>
	);
};

export default Intro;
