import React, { Component } from 'react';
import './projects.css';

import Header from '../../components/header';

class PageProjects extends Component {
  render() {
    return (
      <div className="projects">
        <Header />
        <p className="projects-intro">
          You're now on the projects page!
        </p>
      </div>
    );
  }
}

export default PageProjects;
