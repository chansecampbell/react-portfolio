import React from "react";

import Button from "../../components/button";
import headshot from "../../assets/images/placeholder-300x300.png";

class PageHome extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__intro">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="home__image">
          <img src={headshot} alt="Placeholder" />
        </div>
        <div className="home__cta">
          <Button url="/projects" text="View projects" color="blue" />
        </div>
      </div>
    );
  }
}

export default PageHome;
