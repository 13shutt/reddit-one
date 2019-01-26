import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Header from '../../components/Header'
import PostsMain from '../../components/PostsMain'
import PostsList from '../PostsList'

class AppContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchPosts('popular', 30)
  }

  render() { 
    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reddit</title>
          <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
        </Helmet>

        <Header fetchPosts={this.props.actions.fetchPosts}/>
        
        <PostsMain loading={this.props.loading}>
          {this.props.loading === true 
          ? <Loader type="Oval" color="orange" height={120} width={120} /> 
          : <PostsList />}
        </PostsMain>

        <Switch>
          <Route exact path="/" render={() => <div></div>} />
        </Switch>
      </section>
    )
  }
}
 
export default AppContainer