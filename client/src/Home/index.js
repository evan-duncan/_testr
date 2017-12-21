import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import './Home.css';
import SubHeading from '../components/Nav/SubHeading';

class Home extends Component {
    render() {
        return (
            <div className="Home" />
        );
    }
}

export default withRouter(connect(state => {})(Home));
