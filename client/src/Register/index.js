import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(addHeader());
        dispatch(addFooter());
    }

    render() {
        return (
            <Row className="o-full-vh">
                <Col xs={12} lg={8}>
                    <RegisterForm />
                </Col>
                <Col xs={12} lg={4} className="RegisterForm--codeOn">
                    <CodeOn />
                </Col>
            </Row>
        );
    }
}

export default withRouter(connect(state => state)(Register));