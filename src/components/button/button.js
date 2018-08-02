import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  this.color = () => {
    switch(props.color) {
      case 'purple':
      return 'button--purple';
      default:
      return 'button--white';
    }
  };

  return (
    <div className={"button " + this.color()}>
      <div className="button__wrapper">
        <Link to={props.url}>{props.text}</Link>
      </div>
    </div>
  );
};

export default Button;
