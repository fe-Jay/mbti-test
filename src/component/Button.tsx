import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "button" | "submit" | "reset";
  subject: string;
  design: "black" | "stroke";
  size: string;
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  subject,
  design,
  onClick,
  size,
  ...rest
}) => {
  let className = `py-2 px-5 my-1 text-${size} `;

  switch (design) {
    case "black":
      className += "bg-black text-white rounded-3xl";
      break;
    case "stroke":
      className +=
        "w-full text-left bg-black text-white p-1 border-2 border-white outline-1 outline outline-black rounded-2xl lg:text-xl";
      break;
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {subject}
    </button>
  );
};

export default Button;
