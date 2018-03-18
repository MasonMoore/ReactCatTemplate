//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Components
import ImageCycler from '../ImageCycler/ImageCycler';
import ImageToggle from '../Buttons/ImageToggle/ImageToggle';

//Style
import './Style/CSS/DisplayImage.css';

class DisplayImage extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentImage: this.props.images[0],
      focusImage:false,
      showButtons:false
    }
    this.onClose = this.onClose.bind(this);
    this.setImage = this.setImage.bind(this);
    this.cycleImage = this.cycleImage.bind(this);
  }

  focusImage() {
    this.setState({focusImage: true})
  }

  setImage(imageIndex){
    this.setState({currentImage: this.props.images[imageIndex]})
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
      scope.setImage(imageIndex);
  }

  onMouseHover(isHovering){
    this.setState({showButtons: isHovering})
  }

  onClose(){
    this.setState({focusImage: false})
  }

  render() {
    return (
      <div className="DisplayImage"
        onMouseOver={()=>this.onMouseHover(true)}
        onMouseLeave={()=>this.onMouseHover(false)}
      >
        { this.state.showButtons && this.props.images.length > 1 ?
          <div className="DisplayButtonsContainer">
            <ImageToggle
              onClick={this.cycleImage}
              />
            <ImageToggle
              toggleLeft={true}
              onClick={this.cycleImage}
            />
          </div>
          : null
        }
          <img
            src={this.state.currentImage.src}
            alt={this.state.currentImage.alt}
            onClick={()=>this.focusImage()}
          />
        {this.state.focusImage ? <ImageCycler
          images={this.props.images}
          currentImage={this.state.currentImage}
          setImage={this.setImage}
          onClose={this.onClose}
        />
        : null
      }
      </div>
    );
  }
}

DisplayImage.propTypes = {
  image: PropTypes.array
}

export default DisplayImage;
