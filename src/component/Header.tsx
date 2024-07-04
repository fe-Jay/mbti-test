import React from "react";

import ui from "@/assets/ui.svg";

type HeaderProps = {
  type: string;
};

const Header: React.FC<HeaderProps> = ({ type }) => {
  return (
    <div className="w-full text-left">
      <div className="py-0 md:py-1 px-2 border-b-[1px] border-black relative text-sm md:text-lg">
        {type === "question" && <span>독서모임 성격 테스트 중...</span>}
        {type === "result" && <span>독서모임 성격 테스트 완료</span>}
        <img
          src={`../assets/header/${type}.svg`}
          className="inline-block w-5"
        />
        <img
          src={ui}
          className="absolute right-3 top-[50%] translate-y-[-50%] w-[36px] md:w-[48px] hidden min-[375px]:block"
        />
      </div>
      <div className="py-1 px-2 border-b-[1px] border-black text-sm md:text-lg">
        <span className="inline-block px-2">File</span>
        <span className="inline-block px-2">Edit</span>
        <span className="inline-block px-2">View</span>
        <span className="inline-block px-2">Print</span>
        <span className="inline-block px-2">Help</span>
      </div>
    </div>
  );
};

export default Header;
