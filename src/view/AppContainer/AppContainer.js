import React from 'react'
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import Header from '../../containers/Header'


const AppContainer = (props) => {

  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reddit</title>
        <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
      </Helmet>

      <Header />

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => props.actions.fetchPostsData('popular', 10)}>ok</button>
      <button onClick={() => console.log(props.posts)}>okda</button>
                
      <Switch>
        <Route exact path="/" render={() => <div></div>} />
      </Switch>
    </div>
  );
}

export default AppContainer;