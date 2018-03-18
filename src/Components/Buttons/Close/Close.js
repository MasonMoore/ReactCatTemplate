//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/Close.css';

class Close extends Component {
  render() {
    return (
      <div className={"Close"}
        onClick={()=>this.props.onClose()}
      >
      </div>
    );
  }
}

Close.propTypes = {
  onClose: PropTypes.func
}

export default Close;
