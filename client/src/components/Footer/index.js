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
            <footer className="Footer">
                <div>
                    <div className="Footer--copyright">&copy;{this.copyrightYear} Testr</div>
                    <div className="Footer--terms">
                        <Link to={{ pathname: "/terms", from: window.location.pathname }}>Terms</Link>
                    </div>
                </div>
                <div className="Footer--links">
                    <div>
                        Testr is licensed under <Link to={{ pathname: "/license", from: window.location.pathname }}>GPLv3</Link>
                    </div>
                </div>
            </footer>
        );
    }
}

