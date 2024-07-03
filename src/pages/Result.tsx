import React, { useEffect, useState } from "react";

import Header from "@/component/Header";
import Watermark from "@/component/Watermark";
import { ResultData, ResultItem, ResultProps } from "@/type";
import IconButton from '../component/IconButton';
import alert from "@/assets/alert.png";
import { baseUrl } from "@/config";

const Result: React.FC<ResultProps> = ({ answers, reStart }) => {
  const [data, setData] = useState<ResultData>({});
  const [showToast, setShowToast] = useState(false);
  
  // 결과 데이터 호출
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

  // 결과 이미지 저장
  const handleSaveResult = () => {
  const link = document.createElement('a');
  link.href = `/assets/download/result_${img}`;
  link.download = `result_${img}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  // 결과 공유
  const handleShareResult = () => {
    navigator.clipboard.writeText(baseUrl)
      .then(() => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="sr-only">테스트 결과는 {writer}입니다.</h2>
      <div className="w-full h-full bg-white border-4 border-black flex flex-col">
        <Header type="result" />
        <img
          id="img"
          className="py-10 px-0 w-full max-w-[420px]"
          src={`../assets/result/${img}`}
          alt={writer}
        />
        <div>
          <IconButton
            name="이미지 저장"
            icon="download"
            onClick={() => {
              handleSaveResult();
            }}
          />
          <IconButton
            name="공유하기"
            icon="share"
            onClick={() => {
              handleShareResult();
            }}
          />
          <IconButton
            name="다시하기"
            icon="restart"
            onClick={() => {
              reStart();
            }}
          />
        </div>

        <div className="p-10 relative">
          <img
            src={alert}
            alt="광주 여성 독서모임 도그이어 구경하기"
            className="w-full max-w-[320px] m-auto"
          />
          <a
            href="https://www.instagram.com/dog_ear_book/"
            target="_blank"
            className="w-[25%] md:w-[18%] h-[12%] absolute bottom-[30%] left-[22%] md:left-[30%]">
            <span className="sr-only">인스타그램</span>
          </a>
          <a
            href="https://m.blog.naver.com/gj-dog-ear?tab=1"
            target="_blank"
            className="w-[25%] md:w-[18%] h-[12%] absolute bottom-[30%] right-[22%] md:right-[30%]">
            <span className="sr-only">블로그</span>
          </a>
        </div>
        <Watermark size="md"/>
      </div>
      {showToast && (
        <div className="w-[calc(100%-2rem)] max-w-[580px] fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white p-3 rounded-xl ">
          <span>📚 링크가 클립보드에 복사되었습니다.</span>
        </div>
      )}
    </section>
  );
};

export default Result;
