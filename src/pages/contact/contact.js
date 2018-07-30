import React, { Component } from 'react';
import './contact.css';

import Header from '../../components/header';

class PageContact extends Component {
  render() {
    return (
      <div className="contact">
        <Header />
        <p className="contact-intro">
          You're now on the contact page!
        </p>
      </div>
    );
  }
}

export default PageContact;
