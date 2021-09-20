import React from "react";
import "./navbar.css";
import logoLight from "../../assets/icons/logo-light.png";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoLight} alt="" />
      </div>
      <div className="interal-links">
        <Link to="/">Mint Mutants</Link>
        <Link to="/">Stroy</Link>
        <Link to="/">Roadmap</Link>
        <Link to="/">Team</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
