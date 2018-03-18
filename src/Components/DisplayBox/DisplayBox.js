//React
import React, { Component } from 'react';
//Imports
import classNames from 'classnames'
//Components
import DisplayBoxTitle from './DisplayBoxTitle';
import ImageCycler from './ImageCycler';
import DisplayBoxDescription from './DisplayBoxDescription';
//Style
import './Style/CSS/DisplayBox.css';


class DisplayBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded:false
    }
  }

  render() {
    let expanded = this.state.expanded ? "Expanded" : "Collapsed";
    return (
      <div className={classNames("DisplayBox", expanded)}>
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
