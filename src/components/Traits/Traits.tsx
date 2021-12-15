import React from "react";
import "./styles.scss";
import Header from "../../components/Header/Header";
import rarity from "../../assets/images/rarity.jpg";

const traitsData: Array<any> = [
  { text: "Total mutants", number: 10000 },
  { text: "Background", number: 18 },
  { text: "Body", number: 19 },
  {
    text: "Clothes",
    number: 25,
  },
  {
    text: "Ears",
    number: 16,
  },
  { text: "Eyes", number: 14 },
  { text: "Hands", number: 54 },
  {
    text: "Horns",
    number: 29,
  },
  {
    text: "Nose",
    number: 11,
  },
  {
    text: "Mouth",
    number: 17,
  },
];

const Traits = () => {
  return (
    <div className="traits-container">
      <Header text1="Mutant" text2="Traits" />
      <div className="left-right-traits">
        <div className="left-trait">
          {traitsData.map((item, index) => (
            <div className="each-row" key={index}>
              <h2>{item.text}</h2>
              <p>{item.number}</p>
            </div>
          ))}
          <small>There is a total of 220 different traits.</small>
        </div>
        <div className="right-trait">
          <img src={rarity} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Traits;
