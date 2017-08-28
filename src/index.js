import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch, hashHistory } from "react-router";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam sint repellendus nulla quisquam! Provident tenetur ipsam illum minus cupiditate optio, possimus doloribus ea consequatur et laboriosam voluptatem eum fuga?</p>
                <p>test2tadfafsafsfsaf</p>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { message: "something" };
    }

    onChange(e) {
        this.setState( {message: e.target.value} );
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange = { this.onChange.bind(this) } />
                    <p>{ this.state.message }</p>
                </div>
                <div>
                    <h1>Simple app</h1>
                    <ul className="header">
                        <li>Home</li>
                        <li>Stuff</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="content">
                    <Home />
                </div>
            </div>
        );
    }
}
render((
    <Router history={hashHistory}>
        <Route path="./dist/index.html" component={App} />
    </Router>
    // <App/>
), document.getElementById("app"));
