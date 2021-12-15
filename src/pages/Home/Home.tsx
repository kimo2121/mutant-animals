import React, { useEffect, useState } from "react";
import "./home.css";
import "./beamAnim.scss";
import MutantAnimals from "../../components/mutantAnimals/MutantAnimals";
import NumbersSection from "../../components/NumbersSection/NumbersSection";
import TheTeam from "../../components/TheTeam/TheTeam";
import RoadMap from "../../components/RoadMap/RoadMap";
import DividerWithBG from "../../components/DividerWithBG/DividerWithBG";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import ButtonComponent from "../../components/ButtonCopmonent/ButtonComponent";
import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import telegram from "../../assets/images/telegram.png";
import solana from "../../assets/images/solana.png";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import Mint from "../../components/Mint/Mint";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import * as anchor from "@project-serum/anchor";
import { Link } from "react-scroll";
import AnimalsFilter from "../../components/AnimalsFilter/Filter";
import Traits from "../../components/Traits/Traits";
import Caution from "../../components/Caution/Caution";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { CandyMachine, getCandyMachineState } from "../../utils/candy-machine";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}
const Home = (props: HomeProps) => {
  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [remainedCount, setRemainedCount] = useState(10000);

  useEffect(() => {
    (async () => {
      if (!wallet) return;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          wallet as anchor.Wallet,
          props.candyMachineId,
          props.connection
        );
      setRemainedCount(itemsRemaining);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);


  return (
    <div className="home">
      <div className="banner">
        <div className="banner-backdrop"></div>
        <div className="banner-text-div">
          <h3>Mutant Animals NFT</h3>
          <div className="animated-banner-text">
            <h1>ARE YOU A </h1>
            <h1></h1>
          </div>
          <span className="banner-text-span">
            Get ready for a mutant invasion on
            <b> solana </b>blockchain
          </span>
          <br />
          <span className="banner-text-span">
            Mint a mutant for <b> 1 SOL </b>
          </span>
          <br />
          <br />
          {wallet && (
            <>
              <p className="minted-counter">Minted percentage: {(10000 - remainedCount) / 10000 * 100}% ({10000 - remainedCount} / 10000)</p>
            </>
          )}
          <div className="banner-btns">
            <Link
              activeClass="active"
              smooth={true}
              duration={800}
              to="Mutant-Animals"
            >
              <ButtonComponent className="btn1 btn1-slide" label="THE STORY" />
            </Link>
            <Mint
              candyMachineId={props.candyMachineId}
              config={props.config}
              connection={props.connection}
              startDate={props.startDate}
              treasury={props.treasury}
              txTimeout={props.txTimeout}
            />
          </div>
          <div className="banner-socials">
            <a
              className="banner-twitter"
              href="https://twitter.com/mutant_animals"
            >
              <img src={twitter} alt="" />
            </a>
            <a
              className="banner-discord"
              href="https://discord.com/invite/kjw6Zh9"
            >
              <img src={discord} alt="" />
            </a>
          </div>
          <a href="#">
            <img src={solana} alt="" />
          </a>
        </div>
        <Link smooth={true} duration={800} to="Mutant-Animals">
          <div className="down-arrow-svg">
            <DownArrow />
          </div>
        </Link>
      </div>
      <MutantAnimals />
      <div
        style={{
          backgroundColor: "#f7f7f7",
          padding: "50px 0 10px 0",
          margin: "0vh 0 12vh 0",
        }}
      >
        <Caution />
        <small>
          Mutant animals team will mint the first 100 for giveaways.
        </small>
      </div>
      <NumbersSection />
      <AnimalsFilter />
      <div style={{ backgroundColor: "#f7f7f7", padding: "100px 0" }}>
        <Traits />
      </div>
      <RoadMap />
      <DividerWithBG />
      <TheTeam />
      <DividerWithBG />
      <GetInTouch />
    </div>
  );
};

export default Home;
