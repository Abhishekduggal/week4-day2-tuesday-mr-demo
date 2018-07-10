import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { HashRouter as Router, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import routes from "./routes";

import DashBoard from "./components/DashBoard/DashBoard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
            <DashBoard />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
