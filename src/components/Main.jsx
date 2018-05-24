import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import FavoriteList from './FavoriteList';

// TODO: check Route component props... how to pass props
const Main = props => (
  <div className="contents">
    <Switch>
      {window.location.pathname.includes('index.html') && <Redirect to="/" />}
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route path="/test" render={() => <Test {...props} />} />
      <Route path="/favorite" render={() => <FavoriteList {...props} />} />
    </Switch>
  </div>
);

// <Route path="/test" component={Test} />
// <Route exact path="/" render={() => <Home {...props} />} />
const Home2 = props => (
  <Home {...props} />
);

export default Main;
