import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'

import redditIcon from '../../assets/images/reddit-icon.png'
import Header from '../../components/Header'
import Posts from '../Posts'
import PostPage from '../PostPage'

export default class AppContainer extends Component {

  render() { 
    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>reddit-client</title>
          <link rel="icon" href={redditIcon} type="image/png" sizes="16x16" />
        </Helmet>

        <Header />

        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/r/:type" component={Posts} />
          <Route path="/:permalink" component={PostPage} />
        </Switch>
      </section>
    )
  }
}