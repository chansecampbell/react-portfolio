import React from 'react';

import Header from '../../components/header';

import './home.css';

class PageHome extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <p className="home__intro">
          You're now on the home page!
        </p>
      </div>
    );
  }
}

export default PageHome;
