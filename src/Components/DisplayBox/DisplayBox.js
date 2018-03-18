//React
import React, { Component } from 'react';
//Imports
import classNames from 'classnames'
//Components
import DisplayBoxTitle from './DisplayBoxTitle';
import ImageCycler from './ImageCycler';
import DisplayBoxDescription from './DisplayBoxDescription';
import Expand from '../Buttons/Expand/Expand';

//Style
import './Style/CSS/DisplayBox.css';


class DisplayBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded:false
    }
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand() {
    this.setState({expanded: true})
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
            ref={(displayBoxDescription)=>{this.displayBoxDescription = displayBoxDescription}}
            description={this.props.description}
          />
        </div>
        {!this.state.expanded ?
          <Expand
            onExpand={this.onExpand}
          />
          : null
        }
      </div>
    );
  }
}

export default DisplayBox;
