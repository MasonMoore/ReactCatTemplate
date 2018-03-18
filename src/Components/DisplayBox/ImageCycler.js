//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Components
import ImageDisplay from '../ImageDisplay/ImageDisplay';
//Style
import './Style/CSS/ImageCycler.css';

class ImageCycler extends Component {
  constructor(props){
    super(props)
    this.state = {
      focusImage:false
    }
    this.onClose = this.onClose.bind(this);
  }
  focusImage() {
    this.setState({focusImage: true})
  }
  onClose(){
    this.setState({focusImage: false})
  }
  render() {
    return (
      <div className="ImageCycler">
        <img
          src={this.props.image.src}
          alt={this.props.image.alt}
          onClick={()=>this.focusImage()}
        />
        {this.state.focusImage ? <ImageDisplay
          image={this.props.image}
          onClose={this.onClose}
        />
        : null
      }
      </div>
    );
  }
}

ImageCycler.propTypes = {
  image: PropTypes.object
}

export default ImageCycler;
