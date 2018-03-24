//React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Style
import './Style/CSS/MenuItem.css';

class MenuItem extends Component {
  constructor(props){
    super(props)
  }

  handleOnClick(){
    if(this.props.reRoute){
      this.props.reRoute(this.props.link);
    }
  }

  render() {
    return (
      <div
        className="MenuItem"
        onClick={()=>this.handleOnClick()}
      >
      <li>
        {this.props.menuItem}
        </li>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func

}

export default MenuItem;
