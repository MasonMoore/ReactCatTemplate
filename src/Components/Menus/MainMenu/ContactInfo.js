//React
import React, { Component } from 'react';
//Style
import './Style/CSS/Contact.css';
import contact from './Style/Images/Contact.png';


class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <img src={contact} alt="contact"/>
      </div>
    );
  }
}

export default Contact;
