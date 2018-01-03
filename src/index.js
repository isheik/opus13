import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import { syncHistoryWithStore } from "react-router-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import "./styles/base.css";
import "./styles/reset.css";
import store, { createBrowserHistory } from './store'

const router = (
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>
);

render(router, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}