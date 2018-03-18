//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/MenuBar.css';

class MenuBar extends Component {
  render() {
    return (
      <div className={"MenuBar"}>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

MenuBar.propTypes = {
  menuItem: PropTypes.string
}

export default MenuBar;
