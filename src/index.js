import React from "react";
import { render } from "react-dom";
// import { Router, Route, Switch, hashHistory, IndexRoute, IndexLink, Link } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    // {/* <App/>,  */}
document.getElementById("app"));
