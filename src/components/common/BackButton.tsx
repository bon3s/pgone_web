import React from "react";

export interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick: onClick }: Props) => {
  return (
    <div onClick={onClick} className="backButtonStyle">
      <p className="buttonTextStyle">Back</p>
    </div>
  );
};

export default BackButton;
