import React, { Component } from 'react';
import './Nav.css';
import Logo from '../Logo';
import ProfileIcon from './ProfileIcon';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className="Nav">
                    <Logo />
                    <div className="NavSection--right">
                        <ProfileIcon />
                    </div>
                </div>
                <div className="Nav--underline" />
            </div>
        );
    }
}
