import React from "react";
import "./Navbar.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import navBarSearchIcon from "../../assets/Icons/search.svg";
import navbarUploadIcon from "../../assets/Icons/upload.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="BrainFlix Logo" className="navbar__logo" />
      <div className="navbar__container">
        <div className="navbar__search--container">
          <img
            className="navbar__search--icon"
            src={navBarSearchIcon}
            alt="navbar search icon"
          />
          <input type="text" placeholder="Search" className="navbar__search" />
        </div>
        <img src={avatar} alt="User Avatar" className="navbar__avatar" />
      </div>
      <div className="navbar__upload--container">
        <img
          src={navbarUploadIcon}
          alt="Upload Icon"
          className="navbar__upload--icon"
        />
        <button className="navbar__upload">UPLOAD</button>
      </div>
    </nav>
  );
};

export default Navbar;
