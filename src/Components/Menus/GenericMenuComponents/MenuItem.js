//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <div className="MenuItem">
      <li>
        {this.props.menuItem}
        </li>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.string
}

export default MenuItem;
