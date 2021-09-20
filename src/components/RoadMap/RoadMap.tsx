import React from "react";
import Header from "../Header/Header";
import "./roadMap.css";
import { ReactComponent as Radiation } from "../../assets/icons/radiation.svg";
import { ReactComponent as MoneyBag1 } from "../../assets/icons/money-bag.svg";
import { ReactComponent as Startup } from "../../assets/icons/startup.svg";
import { ReactComponent as Gamepad } from "../../assets/icons/gamepad.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
const RoadMap: React.FC = () => {
  return (
    <div className="road-map">
      <Header text1="Awesome" text2="Roadmap" />
      <div className="dates-container">
        <div className="date-map">
          <Radiation />
          <h3>October 2021</h3>
          <span>Minting the 10,000 mutant animals.</span>
        </div>
        <div className="date-map">
          <MoneyBag1 />
          <h3>November 2021</h3>
          <span>Marketplace & Solanart</span>
        </div>
        <div className="date-map">
          <Startup />
          <h3>January 2022</h3>
          <span>3D Viewer & perks airdrop</span>
        </div>
        <div className="date-map">
          <Gamepad />
          <h3>March 2022</h3>
          <span>
            Beta launch of the Desktop version of MutantGames. More details to
            come...
          </span>
        </div>
        <div className="date-map">
          <Eye />
          <h3>May 2022</h3>
          <span>
            Beta launch of the mobile version of MutantGames. More details to
            come...
          </span>
        </div>
        <div className="date-map">
          <Plus />
          <h3>July 2022</h3>
          <span>
            Airdrop of new perks for the MutantGames. (Only eligible for
            original owners)
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
