import React from "react";

import Nav from '../nav';
import logo from "../../assets/images/logo.svg";

const Header = (props) => {
  this.hamburger = (
    <div className={"header__hamburger " + props.mobileHamburger} onClick={props.toggleMobileMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
  this.nav = props.links.length > 0 ? <Nav {...props} /> : '';
  this.hamburgerMenu = props.links.length > 0 ? this.hamburger : '';

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      { this.hamburgerMenu }
      { this.nav } 
    </header>
  );
};

export default Header;
