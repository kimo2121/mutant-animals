import React from "react";
import "./footer.css";
import logo from "../../assets/icons/logo-light.png";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-socials">
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Telegram />
          </a>
        </div>
        <p>© 2021. Mutant Animals. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
