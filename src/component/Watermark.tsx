import React from "react";

import symbol from "@/assets/symbol.svg";

const Watermark: React.FC = () => {
  return (
    <img className="py-5 w-[80px] md:w-[120px]" src={symbol} alt="도그이어" />
  );
};

export default Watermark;
