import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { HashRouter as Router, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
