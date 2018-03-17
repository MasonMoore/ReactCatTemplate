//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/ImageCycler.css';

class ImageCycler extends Component {
  render() {
    return (
      <div className="ImageCycler">
        <img 
          src={this.props.image.src}
          alt={this.props.image.alt}
        />
      </div>
    );
  }
}

ImageCycler.propTypes = {
  image: PropTypes.object
}

export default ImageCycler;
