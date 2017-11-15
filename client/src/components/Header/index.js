import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="Header--body">
                <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>
                <h1 className="Title">Welcome to React</h1>
            </header>
        );
    }
}

