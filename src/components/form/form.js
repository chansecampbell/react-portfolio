import React from 'react';

const Form = (props) => {
  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__error-wrapper">
          <span>{props.formError}</span>
        </div>
        <form onSubmit={e => props.formSubmit(e)} >
          <label htmlFor="full-name" className="form__label">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="form__input"
            value={props.user.fullName}
            autoComplete="name"
            onChange={e => props.formChange({fullName: e.target.value})} />

          <label htmlFor="email" className="form__label">Email</label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={props.user.email}
            autoComplete="email"
            onChange={e => props.formChange({email: e.target.value})} />
          
          <label htmlFor="message" className="form__label">Message</label>
          <textarea
            id="message"
            value={props.user.message}
            className="form__textarea"
            onChange={e => props.formChange({message: e.target.value})} />
          <input type="submit" value="Submit form" className="form__submit button button--white2" />
        </form>
      </div>
    </div>
  );
}

export default Form;
