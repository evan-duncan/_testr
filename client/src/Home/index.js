import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        if (!this.props.token) {
            return <Redirect to={{ pathname: '/login', from: '/'}} />
        } else {
            return (
                <h1>Home</h1>
            );
        }
    }
}

export default withRouter(connect(state => ({ token: state.user.token }))(Home));
