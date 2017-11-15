import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import PrivateRoute from './components/PrivateRoute';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';
import License from './License';
import About from './About';

class Routes extends Component {
    render() {
        const isAuthenticated = !!this.props.user.token;
        const rootComponent = isAuthenticated ? Home : Login;
        return (
          <Switch>
            <Route exact path="/" component={rootComponent} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/license" component={License} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        );
    }
}

export default connect(state => state)(Routes);

