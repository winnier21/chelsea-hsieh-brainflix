import React from 'react';
import './Navbar.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="BrainFlix Logo" className="navbar__logo" />
      <input type="text" placeholder="Search" className="navbar__search" />
      <button className="navbar__upload">UPLOAD</button>
      <img src={avatar} alt="User Avatar" className="navbar__avatar" />
    </nav>
  );
};

export default Navbar;
