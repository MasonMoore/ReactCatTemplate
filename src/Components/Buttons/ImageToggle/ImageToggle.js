//React
import React, { Component } from 'react';
//Imports
import classNames from 'classnames'
//Style
import './Style/CSS/ImageToggle.css';

class ImageToggle extends Component {
  render() {
    let side = this.props.toggleLeft ? "ToggleLeft" : "ToggleRight";
    return (
      <div className={classNames("ImageToggle", side)}
        onClick={()=>this.props.onClick(this.props.toggleLeft)}
      >
        <p/>
      </div>
    );
  }
}

export default ImageToggle;
