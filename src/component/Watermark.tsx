import React from "react";

import symbol from "@/assets/symbol.svg";
import { WatermarkProps } from "@/type";

const Watermark: React.FC<WatermarkProps> = ({ size }) => {
  let className = ``;

  switch (size) {
    case "sm":
      className += "py-5 w-[80px] md:w-[120px]";
      break;
    case "md":
      className += "py-10 w-[80px] md:w-[120px]";
      break;
    case "lg":
      className += "py-10 w-[120px] md:w-[160px]";
      break;
  }

  return <img className={className} src={symbol} alt="도그이어" />;
};

export default Watermark;
