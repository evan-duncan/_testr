import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import './Login.css';
import LoginForm from './LoginForm';
import CodeOn from '../components/CodeOn';
import {
    addFooter,
    addHeader,
    removeFooter,
    removeHeader,
} from '../actions/app';

class Login extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(removeHeader());
        dispatch(removeFooter());
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(addHeader());
        dispatch(addFooter());
    }

    render() {
        const isAuthenticated = !!this.props.access_token;
        return isAuthenticated 
            ? <Redirect to={{ pathname: '/', from: '/login' }} />
            : (
            <Row className="o-full-vh">
                <Col xs={12} lg={8}>
                    <LoginForm />
                </Col>
                <Col xs={12} lg={4} className="LoginForm--codeOn">
                    <CodeOn />
                </Col>
            </Row>
        );
    }
}

export default withRouter(connect(state => state.user.auth)(Login));
