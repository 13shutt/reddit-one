import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Header from '../../containers/Header'
import PostsList from '../PostsList'

import './AppContainer.css'

class AppContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchPosts('popular', 5)
  }

  render() { 
    return (
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reddit</title>
        <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
      </Helmet>

      <Header fetchPosts={this.props.actions.fetchPosts}/>
      
      <section className={`posts-loading-${this.props.loading}`}>
        {this.props.loading === true 
        ? <Loader type="Oval" color="orange" height={120} width={120} /> 
        : <PostsList />}
      </section>

      
                
      <Switch>
        <Route exact path="/" render={() => <div></div>} />
      </Switch>
    </div>
    );
  }
}
 
export default AppContainer;