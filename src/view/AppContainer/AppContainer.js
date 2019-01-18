import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom'

import Header from '../../containers/Header'

class AppContainer extends Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.fetchPosts('popular', 10)
  }

  render() { 
    return (
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reddit</title>
        <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
      </Helmet>

      <Header />
      
      <button onClick={() => this.props.actions.fetchPosts('popular', 10)}>popular</button>
      <button onClick={() => this.props.actions.fetchPosts('all', 10)}>all</button>
      <button onClick={() => console.log(this.props.posts)}>okda</button>
                
      <Switch>
        <Route exact path="/" render={() => <div></div>} />
      </Switch>
    </div>
    );
  }
}
 
export default AppContainer;