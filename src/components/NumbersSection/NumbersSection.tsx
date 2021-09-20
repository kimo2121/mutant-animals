import React from "react";
import "./NumbersSection.css";
import { ReactComponent as BriefCase } from "../../assets/icons/briefcase.svg";
import { ReactComponent as Group } from "../../assets/icons/group.svg";
import { ReactComponent as Thought } from "../../assets/icons/thought.svg";
const NumbersSection = () => {
  return (
    <div className="numbers-section">
      <div className="number-backdrop"></div>
      <div className="section-container">
        <div className="first">
          <Group />
          <h1>10,000</h1>
          <span>Unique NFT's</span>
        </div>
        <div className="first">
          <BriefCase />
          <h1>120</h1>
          <span>Traits</span>
        </div>
        <div className="first">
          <Thought />
          <h1>1</h1>
          <span>SOL</span>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
