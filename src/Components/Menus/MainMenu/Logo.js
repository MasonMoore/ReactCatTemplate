//React
import React, { Component } from 'react';
//Style
import './Style/CSS/Logo.css';
import mainLogo from './Style/Images/Logo.png';


class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img src={mainLogo} alt="logo"/>
      </div>
    );
  }
}

export default Logo;
