import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './FlashMessage.css';

class FlashMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        );
    }
}

export default connect(state => ({ flashMessages: state.flashMessages }))(FlashMessage);

