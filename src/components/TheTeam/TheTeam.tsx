import React from "react";
import "./TheTeam.css";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import Header from "../Header/Header";
const TheTeam: React.FC = () => {
  return (
    <div id="Team" className="team">
      <Header text1="The" text2="Team" />
      <div className="members">
        <div className="member">
          <img src={member1} alt="" />
          <h6>Jason Thomas</h6>
          <span>Poject founder & Marketer</span>
          <br />
        </div>
        <div className="member">
          <img src={member2} alt="" />
          <h6>Anonymous</h6>
          <span>Artist & Designer</span>
          <br />
        </div>
        <div className="member">
          <img src={member3} alt="" />
          <h6>Roman Atsuco</h6>
          <span>Developper</span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
