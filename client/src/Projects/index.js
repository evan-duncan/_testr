import SubHeading from '../components/Nav/SubHeading';
import React, { Component } from 'react';
import CreateProject from './CreateProject';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjects } from '../actions/project';

class Projects extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getProjects(this.props));
    }

    render() {
        return (
            <div className="Projects">
                <SubHeading>Projects</SubHeading>
            </div>
        )
    }
}

export default withRouter(connect(state => ({token: state.user.auth.access_token}))(Projects));
