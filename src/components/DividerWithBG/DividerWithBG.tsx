import React from "react";
import ButtonComponent from "../ButtonCopmonent/ButtonComponent";
import "./dividerWithBG.css";

const DividerWithBG = () => {
  return (
    <div className="divider-with-bg">
      <div className="divider-backdrop"></div>
    </div>
  );
};

export default DividerWithBG;
