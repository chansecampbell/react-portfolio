import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import PageHome from './home';
import PageProjects from './projects';
import PageContact from './contact';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={PageHome} />
        <Route path="/projects" component={PageProjects} />
        <Route path="/contact" component={PageContact} />
      </div>
    );
  }
}

export default App;
