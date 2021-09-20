import React from "react";
import Header from "../Header/Header";
import "./GetInTouch.css";
const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <Header text1="Get" text2="In Touch" />
      <div className="form">
        <div className="name-first-last">
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="text" />
        </div>
        <input className="subject" placeholder="Subject" type="text" />
        <textarea placeholder="Message" />
      </div>
    </div>
  );
};

export default GetInTouch;
