import React, { Component } from 'react';

export default class Dropdown extends Component {
    render() {
        const visible = this.props.isOpen ? 'visible' : 'hidden';
        const opacity = this.props.isOpen ? 1 : 0;
        return (
            <div className="Dropdown" style={{ visible, opacity }}>
                {this.props.children}
            </div>
        );
    }
}
