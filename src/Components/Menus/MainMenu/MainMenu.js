//React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Imports
import classNames from 'classnames'
//Components
import MenuItem from '../GenericMenuComponents/MenuItem';
import MenuBar from '../GenericMenuComponents/MenuBar';
import Logo from './Logo';

class MainMenu extends Component {
  render() {
    return (
      <MenuBar>
        <div className={classNames( "mainMenuBar")}>
          <Logo/>
            {this.props.menuItems.map((menuItem) =>
              <MenuItem
                key = {menuItem}
                menuItem = {menuItem}
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
