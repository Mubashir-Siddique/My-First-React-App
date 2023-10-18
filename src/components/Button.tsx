import React from "react";

interface Props {
  children: string;
  color?: "success" | "primary" | "danger";
  onClicked: () => void;
}

const Button = ({ children, color = "primary", onClicked }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClicked}>
      {children}
    </button>
  );
};

export default Button;
