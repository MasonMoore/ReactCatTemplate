//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/MenuTitle.css';

class MenuTitle extends Component {
  render() {
    return (
      <div className="MenuTitle">
        {this.props.menuTitle}
      </div>
    );
  }
}

MenuTitle.propTypes = {
  menuTitle: PropTypes.string
}

export default MenuTitle;
