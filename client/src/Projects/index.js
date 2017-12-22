import React, { Component } from 'react';
import './Projects.css';
import SubHeading from '../components/Nav/SubHeading';
import CreateProject from './CreateProject';
import { Route, withRouter, Link } from 'react-router-dom';
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
                {!this.props.projects.length && 
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
                }
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    token: state.user.auth.access_token,
    projects: state.projects,
}))(Projects));
