import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
  </Switch>
);
