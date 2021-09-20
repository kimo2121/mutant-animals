import React from "react";
import "./home.css";

import MutantAnimals from "../../components/mutantAnimals/MutantAnimals";
import NumbersSection from "../../components/NumbersSection/NumbersSection";
import TheTeam from "../../components/TheTeam/TheTeam";
import RoadMap from "../../components/RoadMap/RoadMap";
import DividerWithBG from "../../components/DividerWithBG/DividerWithBG";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import ButtonComponent from "../../components/ButtonCopmonent/ButtonComponent";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-backdrop"></div>
        <p>Mutant Animals NFT</p>
        <span>Get ready for a mutant invasion on solana blockchain</span>
        <div className="banner-btns">
          <ButtonComponent className="btn" label="THE STORY" />
          <button>GO TO MINT PAGE</button>
        </div>
      </div>
      <MutantAnimals />
      <NumbersSection />
      <RoadMap />
      <DividerWithBG />
      <TheTeam />
      <DividerWithBG />
      <GetInTouch />
    </div>
  );
};

export default Home;
