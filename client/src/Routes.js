import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import License from './License';
import About from './About';

class Routes extends Component {
  render() {
    const isAuthenticated = !!this.props.auth.access_token;
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/license" component={License} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(connect(state => state.user)(Routes));
