import React from 'react'
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom'

//import { fetchData } from '../../api/reddit-api'
import Header from '../../containers/Header'

const AppContainer = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reddit</title>
      <link rel="icon" href={require('../../assets/images/reddit-icon.png')} type="image/png" sizes="16x16" />
    </Helmet>

    <Header />

    {/* {console.log(fetchData(10))} */}

    <Switch>
      <Route exact path="/" render={() => <div></div>} />
    </Switch>
  </div>
);

export default AppContainer;
