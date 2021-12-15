import React from "react";
import "./footer.css";
import logo from "../../assets/icons/logo-light.png";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="" />
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
        <p>© 2021. Mutant Animals. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
