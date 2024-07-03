import React from "react";

import ui from "@/assets/ui.png";

type HeaderProps = {
  type: string;
};

const Header: React.FC<HeaderProps> = ({ type }) => {
  return (
    <div className="w-full text-left">
      <div className="py-1 px-2 border-b-[1px] border-black relative text-sm lg:text-lg">
        {type === "question" && <span>독서모임 성격 테스트 중...</span>}
        {type === "result" && <span>독서모임 성격 테스트 완료</span>}
        <img src={`../assets/header/${type}.png`} className="inline-block" />
        <img
          src={ui}
          className="absolute right-3 top-3 hidden min-[375px]:block"
        />
      </div>
      <div className="py-1 px-2 border-b-[1px] border-black text-sm lg:text-lg">
        <span className="inline-block py-1 px-2">File</span>
        <span className="inline-block py-1 px-2">Edit</span>
        <span className="inline-block py-1 px-2">View</span>
        <span className="inline-block py-1 px-2">Print</span>
        <span className="inline-block py-1 px-2">Help</span>
      </div>
    </div>
  );
};

export default Header;
