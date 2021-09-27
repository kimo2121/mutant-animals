import React from "react";
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
import * as anchor from "@project-serum/anchor";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}
const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-backdrop"></div>
        <div className="banner-text-div">
          <p>Mutant Animals NFT</p>
          <div className="animated-banner-text">
            <h1>ARE YOU A </h1>
            <h1></h1>
          </div>
          <span>Get ready for a mutant invasion on solana blockchain</span>
          <br />
          <br />
          <div className="banner-btns">
            <ButtonComponent className="btn1 btn1-slide" label="THE STORY" />
            <Mint
              candyMachineId={props.candyMachineId}
              config={props.config}
              connection={props.connection}
              startDate={props.startDate}
              treasury={props.treasury}
              txTimeout={props.txTimeout}
            />
            {/* <ButtonComponent label="MINT DATE: OCTOBER 20, 2021" /> */}
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
            <a
              className="banner-telegram"
              href="https://t.me/joinchat/KTTBLEFbggJlNGZh"
            >
              <img src={telegram} alt="" />
            </a>
          </div>
          <a href="#">
            <img src={solana} alt="" />
          </a>
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
