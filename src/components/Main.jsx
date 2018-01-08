import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

const Main = props => (
  <div className="contents">
    {console.log(props)}
    <Switch>
      {window.location.pathname.includes('index.html') && <Redirect to="/" />}
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route path="/test" component={Test} />
    </Switch>
  </div>
);

const Home2 = props => (
  <Home {...props} />
);

export default Main;
