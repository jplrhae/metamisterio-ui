import React from "react";

interface ButtonProps {
  /**
   * The label of the button
   */
  label?: string;

  /**
   * The color of the button
   */
  color: "primary" | "secondary";

  /**
   * The onClick handler of the button
   */
  onClick?: () => void;

  /**
   * The children of the button
   */
  children?: React.ReactNode;
}

export default function Button({
  label,
  color,
  onClick,
  children,
}: ButtonProps) {
  return (
    <div
      className={`bg-${color === "primary" ? "primary" : "secondary"} text-white px-4 py-2 rounded-md hover:bg-opacity-80 cursor-pointer transition-all duration-300`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
