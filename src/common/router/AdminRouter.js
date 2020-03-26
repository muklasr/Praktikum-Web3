import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from '../../modules/admin/Dashboard';
import Profile from '../../modules/admin/Profile';

class AdminRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/adm" component={Dashboard} />
        <Route path="/adm/profile" component={Profile} />
      </Switch>
    );
  }
}
export default AdminRouter;
