import React from 'react';
import ReactDOM from 'react-dom';
import SubHeading from '../components/Nav/SubHeading';

export default class ProjectsHeading extends SubHeading {
    render() {
        return ReactDOM.createPortal(
            <div>{this.props.children}</div>,
            this.el
        );
    }
}
