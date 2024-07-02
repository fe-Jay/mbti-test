import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "button" | "submit" | "reset";
  subject: string;
  design: string;
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  subject,
  design,
  onClick,
  ...rest
}) => {
  return (
    <button
      className="bg-black text-white py-2 px-3 rounded-3xl"
      type={type}
      onClick={onClick}
    >
      {subject}
    </button>
  );
};

export default Button;
