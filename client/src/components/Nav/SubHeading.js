import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubHeading extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.style.width = '100%';
        this.el.style.textAlign = 'center';
    }

    componentDidMount() {
        const subHeadingRoot = document.getElementById('subHeadingRoot');
        subHeadingRoot.appendChild(this.el);
    }

    componentWillUnmount() {
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
