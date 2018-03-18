//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Components
import Close from '../Buttons/Close/Close';
import ImageToggle from '../Buttons/ImageToggle/ImageToggle';
//Style
import './Style/CSS/ImageCycler.css';

class ImageCycler extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentImage: this.props.currentImage ? this.props.currentImage : this.props.images[0]
    }
    this.cycleImage = this.cycleImage.bind(this);
  }

  cycleImage(cycleLeft){
    let scope = this;
    let imageIndex = scope.props.images.indexOf(this.state.currentImage);
    if(cycleLeft){
      if(imageIndex - 1 < 0){
        imageIndex = scope.props.images.length - 1;
      }
      else{
        imageIndex--;
      }
    }
    else {
      if(imageIndex + 1 > scope.props.images.length - 1){
        imageIndex = 0
      }
      else {
        imageIndex++;
      }
    }
    scope.setState({currentImage: scope.props.images[imageIndex]})
    if(scope.props.setImage){
      scope.props.setImage(imageIndex);
    }
  }
  render() {
    return (
      <div className="ImageCycler">
        <div className="ImageBackDrop">
          <div className="HeaderBar">
            <Close
              onClose={this.props.onClose}
            />
            {this.props.images.length > 1 ?
              <div>
                <ImageToggle
                  toggleLeft={false}
                  onClick={this.cycleImage}
                />
                <ImageToggle
                  toggleLeft={true}
                  onClick={this.cycleImage}
                />
              </div>
              : null
            }
          </div>
          <div className="ImageHolder">
            <img
              src={this.state.currentImage.src}
              alt={this.state.currentImage.alt}
              />
          </div>
        </div>
      </div>
    );
  }
}

ImageCycler.propTypes = {
  image: PropTypes.array,
  onClose: PropTypes.func
}

export default ImageCycler;
