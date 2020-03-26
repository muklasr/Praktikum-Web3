import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../app/Home";
import Admin from "../../app/Admin";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/adm" component={Admin} />
      </Switch>
    );
  }
}
export default Router;
