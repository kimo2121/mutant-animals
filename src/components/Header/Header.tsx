import React from "react";
import "./header.css";

interface HeaderTypes {
  text1?: string;
  text2?: string;
}

const Header: React.FC<HeaderTypes> = ({ text1, text2 }) => {
  return (
    <div className="header">
      <span className="h-one">{text1}</span>
      <span className="h-two">{text2}</span>
    </div>
  );
};

export default Header;
