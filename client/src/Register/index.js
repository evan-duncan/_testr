import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import './Register.css';
import RegisterForm from './RegisterForm';
import CodeOn from '../components/CodeOn';
import {
    addFooter,
    addHeader,
    removeFooter,
    removeHeader,
} from '../actions/app';

class Register extends Component {
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
                    <RegisterForm />
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <CodeOn />
                </Col>
            </Row>
        );
    }
}

export default connect(state => state)(Register);