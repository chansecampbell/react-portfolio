import React from 'react';
import './header.css';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">Welcome to React 3.0</h1>
      </header>
    </div>
  );
}

export default Header;
