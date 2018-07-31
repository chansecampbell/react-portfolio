import React from 'react';
import { Link } from "react-router-dom";

import './header.css';

import logo from '../../assets/images/logo.svg';

const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <div className={"header__hamburger " + props.mobileHamburger} onClick={props.toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={"header__nav " + props.mobileNav}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
