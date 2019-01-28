import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'

import Header from '../../components/Header'
import Posts from '../Posts'

export default class AppContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchPosts('popular', 30)
  }

  render() { 
    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>reddit-client</title>
          <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
        </Helmet>

        <Header fetchPosts={this.props.actions.fetchPosts}/>

        <Posts loading={this.props.loading} />

        <Switch>
          <Route exact path="/" render={() => <div></div>} />
        </Switch>
      </section>
    )
  }
}