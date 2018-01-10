import React, { Component } from 'react';
import './Projects.css';
import ProjectsHeading from './ProjectsHeading';
import CreateProject from './CreateProject';
import { Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjects } from '../actions/project';
import { Col } from 'react-flexbox-grid';
import GettingStarted from './GettingStarted';
import ProjectCard from './ProjectCard';

class Projects extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getProjects(this.props));
    }

    render() {
        return (
            <div className="Projects">
                <ProjectsHeading>
                    <Col xs={6} xsOffset={3}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 style={{ 
                                display: 'inline-flex',
                                fontWeight: 'normal',
                                paddingLeft: '1rem',
                            }}>Projects</h1>
                            <Link
                                className="btn btn-secondary"
                                style={{ 
                                    display: 'inline-flex',
                                    marginRight: '1rem',
                                }}
                                to={{
                                    pathname: '/projects/new',
                                    from: window.location.pathname,
                                }}>
                                Create New Project
                            </Link>
                        </div>
                    </Col>
                </ProjectsHeading>
                {!this.props.projects.length 
                    ? <GettingStarted /> 
                    : <Col xs={6} xsOffset={3}>{this.props.projects.map((project, idx) => 
                        <ProjectCard key={idx} {...project} />)}
                    </Col>}
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    token: state.user.auth.access_token,
    projects: state.projects,
}))(Projects));
