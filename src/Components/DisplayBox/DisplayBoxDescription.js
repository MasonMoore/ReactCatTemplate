//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/DisplayBoxDescription.css';

class DisplayBoxDescription extends Component {
  render() {
    return (
      <div className={"DisplayBoxDescription"}>
          <div className="description">
          {this.props.description}
          </div>
      </div>
    );
  }
}

DisplayBoxDescription.propTypes = {
  displayBoxDescription: PropTypes.string
}

export default DisplayBoxDescription;
