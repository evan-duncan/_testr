import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Dropdown from './Dropdown';

class ProfileIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        this.setState((prevState, props) => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        return (
            <div className="ProfileIcon" onClick={this.onClickHandler}>
                <span className="ProfileIcon--letter">{this.props.name[0]}</span>
                <Dropdown isOpen={this.state.isOpen}>
                    <Link to={{ pathname: "/logout", from: window.location.pathname }}>Logout</Link>
                </Dropdown>
            </div>
        );
    }
}

export default withRouter(connect(state => ({ name: state.user.first_name }))(ProfileIcon));
