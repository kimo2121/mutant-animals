import React from "react";
import "./MutantAnimals.css";
import mutants from "../../assets/images/mutants.gif";
const MutantAnimals = () => {
  return (
    <div className="mutant-animal">
      <img src={mutants} alt="" />
      <div className="mutant-right-part">
        <span>
          We Are The
          <span> Mutant Animals.</span>
        </span>
        <p>
          Radiation from solar flares baked the earth like an easy bake oven,
          and cellular life began to transform. Humans found themselves morphing
          into strange beings. Some theorised that the plant and animal cells
          from our food were being absorbed and adapted by cancerous cells,
          slowly changing our bodies.
        </p>
        <p>
          We make what we can from the wreckage, living in the remains of a
          world that isn’t around anymore. We figured out ways to get water and
          food, and learned the new food chain. The only rules are the same as
          they always were: survival of the fittest. The war will begin soon
          after every mutant are alive on the blockchain.
        </p>
      </div>
    </div>
  );
};

export default MutantAnimals;
