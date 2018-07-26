import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';

class PageHome extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h1 className="home-title">Welcome to React 2.0</h1>
        </header>
        <p className="home-intro">
          You're now on the home page!
        </p>
      </div>
    );
  }
}

export default PageHome;
