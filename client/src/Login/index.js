import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Login.css';
import LoginForm from './LoginForm';
import BodyCopy from '../components/BodyCopy';

export default class Login extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={12} md={6}>
                    <h1>Shake the stigma</h1>
                    <BodyCopy>
                        Your mental health is important to us.
                        That is why it is our mission to bring together
                        patients and professionals to get everyone the
                        care they need.
                    </BodyCopy>
                    <BodyCopy>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent sed bibendum ligula. Phasellus sit amet mi elementum,
                        scelerisque diam vel, tempor urna. Proin rhoncus eget lorem sit
                        amet feugiat. Morbi pharetra neque sit amet ante semper, nec sodales dui
                        blandit. Nulla eu massa tortor. Sed in erat magna. Nam
                        imperdiet, lectus vel efficitur auctor,
                        leo lacus placerat sapien, eu lacinia leo quam non leo.
                    </BodyCopy>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <LoginForm />
                </Col>
            </Row>
        );
    }
}

