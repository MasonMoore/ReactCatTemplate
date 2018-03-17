//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Imports
import classNames from 'classnames'
//Style
import './Style/CSS/DisplayBoxDescription.css';

class DisplayBoxDescription extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded:false
    }
  }
  render() {
    let expanded = this.state.expanded ? "Expanded" : "Collapsed";
    return (
      <div className={classNames("DisplayBoxDescription", expanded)}>
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
