import SubHeading from '../../components/Nav/SubHeading';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Project.css';
import { getProject } from '../../actions/project';

class Project extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getProject({ name: this.props.routedName }));
        console.log('props: ', this.props);
    }

    render() {
        return (
            <div className="Project">
                <SubHeading>{this.props.name}</SubHeading>
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    ...state.project,
    routedName: state.router.location.pathname.split('/').pop(),
}))(Project));
