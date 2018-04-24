import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

// TODO: check Route component props... how to pass props
const Main = props => (
  <div className="contents">
    <Switch>
      {window.location.pathname.includes('index.html') && <Redirect to="/" />}
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route path="/test" component={Test} />
    </Switch>
  </div>
);

// <Route exact path="/" render={() => <Home {...props} />} />
const Home2 = props => (
  <Home {...props} />
);

export default Main;
