import React from "react";
import { ReactComponent as Tag } from "../../assets/icons/tag.svg";
import { ReactComponent as Hand } from "../../assets/icons/hand.svg";
import { ReactComponent as CopyRight } from "../../assets/icons/copyright.svg";
import TopicIcon from "../TopicIcon/TopicIcon";
import "./caution.css";
const Caution = () => {
  return (
    <div className="caution">
      <TopicIcon
        className="date-map caution-topic"
        icon={<Tag />}
        text="Fair mint price"
        topic="Mutant Animals will be sold at a flat and fixed price of 1 SOL."
      />
      <TopicIcon
        className="date-map caution-topic"
        icon={<CopyRight />}
        text="Ownership"
        topic="As a Mutant Animals NFT owner you are free to use your artwork as you please"
      />
      <TopicIcon
        className="date-map caution-topic"
        icon={<Hand />}
        text="Fair mint process"
        topic="The gate will open at the same time for the public. Minting is limited at 1 NFT/request."
      />
    </div>
  );
};

export default Caution;
