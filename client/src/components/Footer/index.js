import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    get yearCreated() {
        return 2017;
    }

    get currentYear() {
        const now = new Date();
        return now.getFullYear();
    }

    get copyrightYear() {
        if (this.currentYear !== this.yearCreated) {
            return `${this.yearCreated} - ${this.currentYear}`;
        }

        return this.currentYear;
    }

    render() {
        return (
            <footer className="Footer--body">
                <div className="Footer--copyright">&copy;{this.copyrightYear}, Evan Duncan</div>
                <ul className="Footer--linksList">
                    <li className="Footer--linksListItem">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="Footer--linksListItem">
                        <Link to="/license">License</Link>
                    </li>
                    <li className="Footer--linksListItem">
                        <a href="https://bitbucket.org/evanduncan/get_help">Code</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

