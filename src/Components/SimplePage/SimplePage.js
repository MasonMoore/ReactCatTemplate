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
    menuItems: [
      {label:'Simba', link: '/'},
      {label:'Link2', link: '/2'},
      {label:'Link3', link: '/3'},
      {label:'Link4', link: '/4'}
    ]
  }
}

  render() {
    return (
      <div className="SimplePage">
        <MainMenu
          menuItems={this.state.menuItems}
          reRoute={this.props.reRoute}
          />
        {this.props.children}
      </div>
    );
  }
}

export default SimplePage;
