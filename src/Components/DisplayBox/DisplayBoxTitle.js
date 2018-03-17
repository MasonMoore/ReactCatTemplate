//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/DisplayBoxTitle.css';

class DisplayBoxTitle extends Component {
  render() {
    return (
      <div className="DisplayBoxTitle">
        {this.props.displayBoxTitle}
      </div>
    );
  }
}

DisplayBoxTitle.propTypes = {
  displayBoxTitle: PropTypes.string
}

export default DisplayBoxTitle;
