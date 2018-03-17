//React
import React, { Component } from 'react';
//Components
import DisplayBoxTitle from './DisplayBoxTitle';
import ImageCycler from './ImageCycler';
import DisplayBoxDescription from './DisplayBoxDescription';
//Style
import './Style/CSS/DisplayBox.css';


class DisplayBox extends Component {

  render() {
    return (
      <div className="DisplayBox">
        <div className="contents">
          <DisplayBoxTitle
            displayBoxTitle={this.props.title}
          />
          <ImageCycler
            image={this.props.image}
          />
          <DisplayBoxDescription
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}

export default DisplayBox;
