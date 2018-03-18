//React
import React, { Component } from 'react';
//Style
import './Style/CSS/Expand.css';

class Expand extends Component {
  render() {
    return (
      <div className={"Expand"}
        onClick={()=>this.props.onExpand()}
      >
        <p/>
      </div>
    );
  }
}

export default Expand;
