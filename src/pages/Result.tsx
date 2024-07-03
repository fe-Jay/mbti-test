import React, { useEffect, useState } from "react";

import Header from "@/component/Header";
import Watermark from "@/component/Watermark";
import { ResultData, ResultItem, ResultProps } from "@/type";

const Result: React.FC<ResultProps> = ({ answers, reStart }) => {
  const [data, setData] = useState<ResultData>({});

  useEffect(() => {
    fetch("../api/result.json")
      .then(res => res.json())
      .then((data: ResultData) => {
        setData(data);
      })
      .catch(error => console.error("Error loading questions:", error));
  }, []);

  if (Object.keys(data).length === 0) {
    return <div>로딩중...</div>;
  }

  const { EI, SN, TF, JP } = answers;

  const mbti = `${EI < 2 ? "I" : "E"}${SN < 2 ? "N" : "S"}${TF < 2 ? "F" : "T"}${JP < 2 ? "P" : "J"}`;

  const result: ResultItem | undefined = data[mbti];
  const { writer, img } = result;

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="sr-only">테스트 결과는 {writer}입니다.</h2>
      <div className="w-full h-full bg-white border-4 border-black flex flex-col">
        <Header type="result" />
        <img
          id="img"
          className="py-10 px-0"
          src={`../assets/result/${img}`}
          alt={writer}
        />
        <div>
          <button type="button">이미지 저장</button>
          <button type="button">공유하기</button>
          <button
            type="button"
            onClick={() => {
              reStart();
            }}
          >
            다시하기
          </button>
        </div>

        <div>
          <a href="" target="_blank">
            <span>인스타그램</span>
          </a>
          <a href="" target="_blank">
            <span>블로그</span>
          </a>
        </div>
        <Watermark />
      </div>
    </section>
  );
};

export default Result;
