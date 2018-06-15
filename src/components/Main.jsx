import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import FavoriteTab from './FavoriteTab';
import MentionedTab from './MentionedTab';
import Header from './Header';

// TODO: check Route component props... how to pass props
const Main = props => (
  <div className="contents">
    <Header {...props} />
    <div className="body">
      <div className="timeline">
        <Switch>
          {window.location.pathname.includes('index.html') && <Redirect to="/" />}
          <Route exact path="/" render={() => <Home {...props} />} />
          <Route path="/test" render={() => <Test {...props} />} />
          <Route path="/favorite" render={() => <FavoriteTab {...props} />} />
          <Route path="/mentioned" render={() => <MentionedTab {...props} />} />
        </Switch>
      </div>
    </div>
  </div>
);

// <Route path="/test" component={Test} />
// <Route exact path="/" render={() => <Home {...props} />} />
const Home2 = props => (
  <Home {...props} />
);

export default Main;
