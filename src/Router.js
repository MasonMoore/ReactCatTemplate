//React
import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
//Components
import App from './Containers/App/App'


class AppRouter extends Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={App} />
        </BrowserRouter>
      )
    }
}

export default AppRouter
