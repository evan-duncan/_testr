import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
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

    componentDidUnmount() {
        const { dispatch } = this.props;
        dispatch(addHeader());
        dispatch(addFooter());
    }

    render() {
        return (
            <Row className="o-full-vh">
                <Col xs={12} sm={12} md={8}>
                    <LoginForm />
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <CodeOn />
                </Col>
            </Row>
        );
    }
}

export default connect(state => state)(Login);
