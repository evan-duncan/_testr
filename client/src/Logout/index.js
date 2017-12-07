import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { destroySession } from '../actions/user';

class Logout extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(destroySession());
    }

    render() {
        return <Redirect to={{ pathname: '/', from: '/logout' }} />;
    }
}

export default withRouter(connect(state => {})(Logout));
