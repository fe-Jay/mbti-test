import React from "react";

import btn1 from "@/assets/btn1.png";
import btn2 from "@/assets/btn2.png";
import btn3 from "@/assets/btn3.png";
import { IconButtonProps } from "@/type";

const IconButton: React.FC<IconButtonProps> = ({ icon, name, onClick }) => {
  let img = ``;

  switch (icon) {
    case "download":
      img = btn1;
      break;
    case "share":
      img = btn2;
      break;
    case "restart":
      img = btn3;
      break;
  }

  return (
    <button type="button" className="mx-3">
      <img
        src={img}
        alt={name}
        onClick={onClick}
        className="w-10 md:w-12 pb-2"
      />
      <span className="text-sm md:text-md">{name}</span>
    </button>
  );
};

export default IconButton;
