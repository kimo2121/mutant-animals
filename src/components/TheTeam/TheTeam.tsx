import React from "react";
import "./TheTeam.css";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import Header from "../Header/Header";
const TheTeam: React.FC = () => {
  return (
    <div className="team">
      <Header text1="The" text2="Team" />
      <div className="members">
        <div className="member">
          <img src={member1} alt="" />
          <p>Jason Thomas</p>
          <span>Poject founder & Marketer</span>
          <br />
          <a href="">
            <Twitter />
          </a>
        </div>
        <div className="member">
          <img src={member2} alt="" />
          <p>Anonymous</p>
          <span>Artist & Designer</span>
          <br />

          <a href="">
            <Twitter />
          </a>
        </div>
        <div className="member">
          <img src={member3} alt="" />
          <p>Roman Atsuco</p>
          <span>Developper</span>
          <br />

          <a href="">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
