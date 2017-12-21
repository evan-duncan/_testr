import React, { Component } from 'react';
import SubHeading from '../../components/Nav/SubHeading';
import { Row, Col } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project';

class CreateProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, token } = this.props;
        dispatch(createProject({ ...this.state, token }));
    }

    handleChange(event) {
        return this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="CreateProject">
                <SubHeading>Create New Project</SubHeading>
                <Row>
                    <Col xs={12}>
                        <div className="CreateProjectForm">
                            <form className="CreateProjectForm" onSubmit={this.handleSubmit}>
                                <div className="CreateProjectForm--inputGroup">
                                    <label>
                                        <span className="CreatProjectForm--inputGroupLabel">Project name</span>
                                        <input className="CeateProjectForm--inputGroupInput" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className="CreateProjectForm--inputGroup">
                                    <Link className="btn btn-secondary" to={{ pathname: '/projects', from: window.location.pathname }}>Cancel</Link>
                                    <input className="btn btn-primary" type="submit" value="Create project" />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(connect(state => ({ token: state.user.auth.access_token }))(CreateProject));
