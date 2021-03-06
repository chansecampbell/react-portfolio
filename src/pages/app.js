import React from "react";
import { Route } from "react-router-dom"
import Loadable from 'react-loadable';

import Header from "../components/header";

function loadingComponent({ error }) {
  if (error) {
    return 'Error!';
  } else {
    return <h3>Loading...</h3>;
  }
}

const PageHome = Loadable({
  loader: () => import("./home" /* webpackChunkName: "home" */),
  loading: loadingComponent
});

const PageProjects = Loadable({
  loader: () => import("./projects" /* webpackChunkName: "projects" */),
  loading: loadingComponent
});

const PageContact = Loadable({
  loader: () => import("./contact" /* webpackChunkName: "contact" */),
  loading: loadingComponent
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false
    };

    this.headerLinks = [
      {
        text: "Home",
        url: "/"
      },
      {
        text: "Contact",
        url: "/contact"
      },
      {
        text: "Projects",
        url: "/projects"
      }
    ]

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  }

  render() {
    let mobileHamburger = this.state.mobileMenuOpen ? "header__hamburger--open" : "";
    let mobileNav = this.state.mobileMenuOpen ? "nav--open" : "";

    return (
      <div className="app">
        <Header
          links={this.headerLinks}
          mobileHamburger={mobileHamburger}
          mobileNav={mobileNav}
          toggleMobileMenu={this.toggleMobileMenu} />
        <Route path="/" exact component={PageHome} />
        <Route path="/projects" component={PageProjects} />
        <Route path="/contact" component={PageContact} />
      </div>
    );
  }
};

export default App;
