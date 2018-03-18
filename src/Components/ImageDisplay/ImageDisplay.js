//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Components
import MenuBar from '../Menus/GenericMenuComponents/MenuBar';
import Close from '../Buttons/Close/Close';
//Style
import './Style/CSS/ImageDisplay.css';

class ImageDisplay extends Component {
  render() {
    return (
      <div className="ImageDisplay">
        <div className="ImageBackDrop">
          <div className="HeaderBar">
            <Close
              onClose={this.props.onClose}
            />
          </div>
          <div className="ImageHolder">
            <img
              src={this.props.image.src}
              alt={this.props.image.alt}
              />
          </div>
        </div>
      </div>
    );
  }
}

ImageDisplay.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func
}

export default ImageDisplay;
