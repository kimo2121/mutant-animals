import React from "react";
import "./home.css";

import MutantAnimals from "../../components/mutantAnimals/MutantAnimals";
import NumbersSection from "../../components/NumbersSection/NumbersSection";
import TheTeam from "../../components/TheTeam/TheTeam";
import RoadMap from "../../components/RoadMap/RoadMap";
import DividerWithBG from "../../components/DividerWithBG/DividerWithBG";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="banner"></div>
      <MutantAnimals />
      <NumbersSection />
      <TheTeam />
      <RoadMap />
      <DividerWithBG />
      <GetInTouch />
    </div>
  );
};

export default Home;
