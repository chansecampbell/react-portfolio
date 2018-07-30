import React from 'react';
import { Link } from "react-router-dom";

import './header.css';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">Welcome to React 3.0</h1>
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
