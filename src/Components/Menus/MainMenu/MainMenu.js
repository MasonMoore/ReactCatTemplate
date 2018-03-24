//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
//Imports
import classNames from 'classnames'
//Components
import MenuItem from '../GenericMenuComponents/MenuItem';
import MenuBar from '../GenericMenuComponents/MenuBar';
import Logo from './Logo';

class MainMenu extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <MenuBar>
        <div className={classNames( "mainMenuBar")}>
          <Logo/>
            {this.props.menuItems.map((menuItem) =>
              <MenuItem
                key={menuItem.label}
                menuItem={menuItem.label}
                link={menuItem.link}
                reRoute={this.props.reRoute}
              />
            )}
          </div>
      </MenuBar>
    );
  }
}

MainMenu.propTypes = {
  menuItems: PropTypes.array
}

export default MainMenu;
