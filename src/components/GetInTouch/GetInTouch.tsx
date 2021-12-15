import React from "react";
import Header from "../Header/Header";
import "./GetInTouch.css";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const MintButton = styled(Button)`
  padding: 10px 30px !important;
  border: 1px solid #f24259 !important;
  border-radius: 0px !important;
  text-transform: uppercase !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  letter-spacing: 1px !important;
  color: white !important;
  width: 180px;
  z-index: 1;
  height: 100%;
  position: relative !important;
  -webkit-animation-delay: 0s !important;
  line-height: 100%;
  animation-delay: 1.2s !important;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) !important;
  background-color: #f24259 !important;
  border: 1px solid #f24259 !important;
  &:hover {
    color: #f24259 !important;
    background-color: transparent !important;
    border-color: #f24259 !important;
    text-shadow: nthree !important;
  }
  &:hover:before {
    left: 0% !important;
    right: auto !important;
    width: 100% !important;
  }
  &:before {
    display: block !important;
    position: absolute !important;
    top: 0px !important;
    right: 0px !important;
    height: 100% !important;
    width: 0px !important;
    z-index: -1 !important;
    content: "" !important;
    color: black !important ;
    background: white !important;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) !important;
    border-color: #f24259 !important;
  }
  span {
    line-height: 100%;
  }
  span:before {
    color: black !important;
  }
`;

const GetInTouch: React.FC = () => {
  return (
    <div id="Contact" className="get-in-touch">
      <Header text1="Get" text2="In Touch" />
      <div className="form">
        <div className="name-first-last">
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="text" />
        </div>
        <input className="subject" placeholder="Subject" type="text" />
        <textarea placeholder="Message" />
        <div className="banner-btns">
          <MintButton>Send Message</MintButton>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
