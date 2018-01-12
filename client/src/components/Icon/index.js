import React, { Component } from 'react';
import './dripicons/webfont.css';

export default function Icon({ name }) {
    return (
        <i className={`dripicons-${name}`} />
    );
}
