import React from 'react';
import { Route } from 'react-router-dom'

import '../assets/css/styles.css';

import Header from '../components/header';
import PageHome from './home';
import PageProjects from './projects';
import PageContact from './contact';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  }

  render() {
    let mobileHamburger = this.state.mobileMenuOpen ? 'header__hamburger--open' : '';
    let mobileNav = this.state.mobileMenuOpen ? 'header__nav--open' : '';

    return (
      <div className="app">
        <Header mobileHamburger={mobileHamburger} mobileNav={mobileNav} toggleMobileMenu={this.toggleMobileMenu} />
        <Route path="/" exact component={PageHome} />
        <Route path="/projects" component={PageProjects} />
        <Route path="/contact" component={PageContact} />
      </div>
    );
  }
}

export default App;
