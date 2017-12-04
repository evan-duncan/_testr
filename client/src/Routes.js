import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from './components/PrivateRoute';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';
import License from './License';
import About from './About';

export default class Routes extends Component {
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/license" component={License} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        );
    }
}
