import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
//import component
import AppNavBar from './AppNavBar';
//import pages
import Home from '../pages/Home';
import Graph from '../pages/Graph';

export default function AppNavLinks () {
    return (
        <Router>
            <AppNavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/graph" component={Graph} />
            </Switch>
        </Router>
    );
}