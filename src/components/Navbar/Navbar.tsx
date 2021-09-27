import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { ReactComponent as Menu } from "../../assets/icons/list.svg";
import logoIcon from "../../assets/icons/logo-light.png";
import logoIcon2 from "../../assets/icons/logo-dark.png";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";

const ConnectButton = styled(WalletMultiButton)`
  padding: 5px 10px !important;
  background-color: #f24259 !important ;
  transition: all 0.25s !important;
  color: white !important;
  &:hover {
    background-color: #f24259 !important;
    color: black !important;
  }
`;
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);
  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div className={navbar ? "logo height" : "logo"}>
          <a href="/">
            {!navbar ? (
              <img src={logoIcon} alt="" />
            ) : (
              <img src={logoIcon2} alt="" />
            )}
          </a>
        </div>
        <div className={navbar ? "nav-links navabr" : "nav-links"}>
          <ConnectButton />
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            Story
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="About">
            Roadmap
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Mint">
            Team
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="RoadMap">
            Contact
          </Link>
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div className="logo mobile-logo">
            <a href="/">
              {!navbar ? (
                <img src={logoIcon} alt="" />
              ) : (
                <img src={logoIcon2} alt="" />
              )}
            </a>
          </div>
          <div className="mobile-div-connect">
            <div style={{ marginRight: "4vw" }}>
              <ConnectButton />
            </div>
            <Menu
              onClick={toggleAccordion}
              className={
                menu
                  ? "slide-menu-icon active"
                  : navbar
                  ? "slide-menu-icon navbar"
                  : "slide-menu-icon"
              }
            />
          </div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Home"
          >
            Story
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            Roadmap
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Mint"
          >
            Team
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
