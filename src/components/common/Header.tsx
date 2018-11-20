// Import libraries for making a component
import React from "react";

interface Props {
  headerText: string;
}

const Header = (props: Props) => {
  return (
    <div className="headerViewStyle">
      <h3 className="headerTextStyle">{props.headerText}</h3>
    </div>
  );
};

// Make the component available to other parts of the app
export default Header;
