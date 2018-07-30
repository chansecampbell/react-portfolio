import React from 'react';
import { Link } from "react-router-dom";

import './header.css';

import logo from '../../assets/images/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleMobileMenu() {
    console.log('Toggling mobile menu');
  }

  render() {
    return (
      <div className="header__wrapper">
        <header className="header">
          <img src={logo} className="header__logo" alt="logo" />
          <button className="header__nav-button" onClick={this.toggleMobileMenu}>Menu</button>
          <nav className="header__nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
