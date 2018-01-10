import React from 'react';
import { Link } from 'react-router-dom';

export default function GettingStarted({}) {
    return (
        <div className="Projects--createNewWrapper">
            <div className="Projects--headline">
                <h2 className="Projects--hdg">Get Started with Testr</h2>
                <p className="Projects--gettingStarted">
                    If you're new to Testr check out our Getting Started guide to get up and running.
                </p>
            </div>
            <div className="Projects--createNewCta">
                <Link className="btn btn-primary" to={{ pathname: "/projects/new", from: window.location.pathname }}>Create New Project</Link>
            </div>
        </div>
    );
}
