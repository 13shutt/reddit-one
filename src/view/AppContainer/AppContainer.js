import React from 'react'
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom'

import { fetchPopularPostsArray, fetchAllPostsArray, fetchOriginalPostsArray } from '../../api/reddit-api'
import Header from '../../containers/Header'

const AppContainer = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reddit</title>
      <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
    </Helmet>

    <Header />

    {console.log(fetchPopularPostsArray(10), 'popular')}
    {console.log(fetchAllPostsArray(10), 'all')}
    {console.log(fetchOriginalPostsArray(10), 'original')}

    <Switch>
      <Route exact path="/" render={() => <div></div>} />
    </Switch>
  </div>
);

export default AppContainer;
