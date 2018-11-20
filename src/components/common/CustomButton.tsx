import React from "react";

interface Props {
  onClick: () => void;
  children: string;
}
const CustomButton = ({ onClick, children }: Props) => {
  return (
    <div onClick={onClick} className="customButtonStyle">
      <p className="buttonTextStyle">{children}</p>
    </div>
  );
};

export default CustomButton;
