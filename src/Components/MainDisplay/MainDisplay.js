//React
import React, { Component } from 'react';
//Components
import MenuBar from '../Menus/GenericMenuComponents/MenuBar';
import MenuTitle from '../Menus/GenericMenuComponents/MenuTitle';
//Style
import './Style/CSS/MainDisplay.css';


class MainDisplay extends Component {

  render() {
    return (
      <div className="MainDisplay">
        <MenuBar>
          <MenuTitle
            menuTitle = {this.props.title}
          />
        </MenuBar>
        <div className="MainContents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainDisplay;
