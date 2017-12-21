import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class SubHeading extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        const subHeadingRoot = document.getElementById('subHeadingRoot');
        subHeadingRoot.appendChild(this.el);
    }

    componentDidUnmount() {
        const subHeadingRoot = document.getElementById('subHeadingRoot');
        subHeadingRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <h1 style={{ fontWeight: 'normal' }}>{this.props.children}</h1>,
            this.el,
        );
    }
}
