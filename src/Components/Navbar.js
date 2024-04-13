/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/Logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#demo">Demo</a>
        <a href="#contact">Contact</a>
     </div>
    </nav>
  );
};

export default Navbar;