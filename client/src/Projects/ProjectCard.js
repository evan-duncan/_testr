import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ name, ...rest }) {
    return (
        <Link 
            className="ProjectCard"
            to={{ pathname: `/projects/${encodeURIComponent(name)}`, from: window.location.pathname }}>
            {name}
        </Link>
    );
}
