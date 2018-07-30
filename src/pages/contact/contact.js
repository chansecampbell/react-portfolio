import React from 'react';
import './contact.css';

import Header from '../../components/header';

class PageContact extends React.Component {
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
