//React
import React, { Component } from 'react';
//Imports
import classNames from 'classnames'
//Components
import DisplayBoxTitle from './DisplayBoxTitle';
import DisplayImage from './DisplayImage';
import DisplayBoxDescription from './DisplayBoxDescription';
import Expand from '../Buttons/Expand/Expand';

//Style
import './Style/CSS/DisplayBox.css';


class DisplayBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      expanded:false,
      showButtons: this.props.isMobile ? true : false
    }
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand() {
    this.setState({expanded: true})
  }

  onMouseHover(isHovering){
    this.setState({showButtons: this.props.isMobile ? true : isHovering})
  }

  render() {
    let expanded = this.state.expanded ? "Expanded" : "Collapsed";
    return (
      <div className={classNames("DisplayBox", expanded)}
        onMouseOver={()=>this.onMouseHover(true)}
        onMouseLeave={()=>this.onMouseHover(false)}
      >
        <div className="contents">
          <DisplayBoxTitle
            displayBoxTitle={this.props.title}
          />
          <DisplayImage
            images={this.props.images}
          />
          <DisplayBoxDescription
            ref={(displayBoxDescription)=>{this.displayBoxDescription = displayBoxDescription}}
            description={this.props.description}
          />
        </div>
        {!this.state.expanded  && this.state.showButtons ?
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
