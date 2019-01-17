import React from 'react'
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';

import Header from '../../containers/Header'

const AppContainer = (props) => {

  useEffect(() => props.actions.fetchPosts('popular', 10), []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reddit</title>
        <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
      </Helmet>

      <Header />
      
      <button onClick={() => props.actions.fetchPosts('popular', 10)}>popular</button>
      <button onClick={() => props.actions.fetchPosts('all', 10)}>all</button>
      <button onClick={() => console.log(props.posts)}>okda</button>
                
      <Switch>
        <Route exact path="/" render={() => <div></div>} />
      </Switch>
    </div>
  );
}

export default AppContainer;