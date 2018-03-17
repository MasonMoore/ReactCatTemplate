//React
import React, { Component } from 'react';
//Components
import MainMenu from '../Menus/MainMenu/MainMenu';
//Style
import './Style/CSS/SimplePage.css';


class SimplePage extends Component {
constructor(props){
  super(props);
  this.state = {
    menuItems: ['ItemOne', 'ItemTwo', 'ItemThree', 'ItemFour', 'ItemFive']
  }
}

  render() {
    return (
      <div className="SimplePage">
      <MainMenu
        menuItems={this.state.menuItems}
      />
        {this.props.children}
      </div>
    );
  }
}

export default SimplePage;
