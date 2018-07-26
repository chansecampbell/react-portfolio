import React, { Component } from 'react';
import './home.css';

import Header from '../../components/header';

class PageHome extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <p className="home-intro">
          You're now on the home page!
        </p>
      </div>
    );
  }
}

export default PageHome;
