import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import component
import AppNavBar from "./AppNavBar";
//import pages
import Dashboard from "../pages/Dashboard";
import Graph from "../pages/Graph";

const AppNavLinks = () => {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/graph" component={Graph} />
      </Switch>
    </Router>
  );
};

export default AppNavLinks;
