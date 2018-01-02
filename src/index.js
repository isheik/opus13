import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./styles/base.css";
import "./styles/reset.css";

const router = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

render(router, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}