import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import './styles/base.css';
import './styles/reset.css';
import store from './store';

const router = (
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}