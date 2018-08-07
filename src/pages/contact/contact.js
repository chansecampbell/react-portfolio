import React from "react";

import Form from "../../components/form";

class PageContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      message: ''
    };
  }

  formChange(data) {
    this.setState(data);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log('Submitting');
  }

  formError() {
    console.log('Error');
  }

  render() {
    this.user = {
      fullName: this.state.fullName,
      email: this.state.email,
      message: this.state.message
    };

    return (
      <div className="contact">
        <div className="contact__intro">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="contact__section">
          <div className="contact__diagonal"></div>
          <div className="contact__form">
            <Form
              user={this.user}
              formChange={this.formChange.bind(this)}
              formSubmit={this.formSubmit.bind(this)}
              formError={this.formError.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
