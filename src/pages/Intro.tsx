import React from "react";

import cursor from "@/assets/cursor.svg";
import face from "@/assets/face.svg";
import title from "@/assets/title.svg";
import Button from "@/component/Button";
import Watermark from "@/component/Watermark";
import { IntroProps } from "@/type";

const Intro: React.FC<IntroProps> = ({ nextStep }) => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100dvh-3rem)] px-5">
      <h2 className="sr-only">테스트 시작하기</h2>
      <div className="flex-[1_1_0%] max-h-[520px] pt-5">
        <img
          id="img"
          src={title}
          alt="독서모임 성격 테스트"
          className="pb-10 w-full max-w-[240px]"
        />
        <img id="img" src={face} alt="face" className="animate-spin-slow" />
      </div>

      <span className="relative my-5">
        <Button
          type="button"
          subject="시작하기"
          design="black"
          size="3xl"
          onClick={() => {
            nextStep();
          }}
        />
        <img
          src={cursor}
          alt="시작하기"
          className="absolute right-[-32px] bottom-[-32px]"
        />
      </span>
      <Watermark size="lg" />
    </section>
  );
};

export default Intro;
