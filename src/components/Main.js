import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

const Main = () => (
    <div className="contents">
        <Switch>
            {window.location.pathname.includes('index.html') && <Redirect to="/" />}
            <Route exact path='/' component={Home} {...this.props} />
            <Route path='/test' component={Test} />
        </Switch>
    </div>
);

export default Main;