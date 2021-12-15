import React from "react";
import Header from "../Header/Header";
import "./roadMap.css";
import { ReactComponent as Radiation } from "../../assets/icons/radiation.svg";
import { ReactComponent as MoneyBag1 } from "../../assets/icons/money-bag.svg";
import { ReactComponent as Startup } from "../../assets/icons/startup.svg";
import { ReactComponent as Gamepad } from "../../assets/icons/gamepad.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import TopicIcon from "../TopicIcon/TopicIcon";
const RoadMap: React.FC = () => {
  return (
    <div id="RoadMap" className="road-map">
      <Header text1="Awesome" text2="Roadmap" />
      <div className="dates-container">
        <TopicIcon
          className="date-map"
          icon={<Radiation />}
          text="October 2021"
          topic="Minting the 10,000 mutant animals."
        />
        <TopicIcon
          className="date-map"
          icon={<MoneyBag1 />}
          text="November 2021"
          topic="Marketplace & Solanart"
        />
        <TopicIcon
          className="date-map"
          icon={<Startup />}
          text="January 2022"
          topic="3D Viewer & perks airdrop"
        />
        <TopicIcon
          className="date-map"
          icon={<Gamepad />}
          text="March 2022"
          topic="Beta launch of the Desktop version of MutantGames. More details to
          come..."
        />
        <TopicIcon
          className="date-map"
          icon={<Eye />}
          text="May 2022"
          topic="Beta launch of the mobile version of MutantGames. More details to
          come..."
        />
        <TopicIcon
          className="date-map"
          icon={<Plus />}
          text="July 2022"
          topic="Airdrop of new perks for the MutantGames. (Only eligible for
            original owners)"
        />
      </div>
    </div>
  );
};

export default RoadMap;
