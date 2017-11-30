import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default class Header extends Component {
    render() {
        return (
            <header className="Header--body">
                <Link to="/"><Logo /></Link>
                <h1 className="Title">Welcome to React</h1>
            </header>
        );
    }
}

