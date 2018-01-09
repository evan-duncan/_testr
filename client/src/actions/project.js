import { push } from 'react-router-redux';
export const CREATE_PROJECT_SUCCESS = 'testr/project/CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'testr/project/CREATE_PROJECT_FAILURE';
export const GET_PROJECTS_SUCCESS = 'testr/projects/GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'testr/projects/GET_PROJECTS_FAILURE';
export const GET_PROJECT_SUCCESS = 'testr/project/GET_PROJECTS_SUCCESS';
export const GET_PROJECT_FAILURE = 'testr/project/GET_PROJECTS_FAILURE';

export function getProjects({ token }) {
    return dispatch => {
        return getProjects({ token }).then(
            projects => dispatch(getProjectsSuccess(projects)),
            err      => dispatch(getProjectsFailure(err))
        );
    };
}

export function createProject({ name, token }) {
    return dispatch => {
        return postProject({ name, token }).then(
            project => {
                dispatch(createSuccess(project))
                dispatch(push(`/projects/${encodeURIComponent(project.name)}`));
            },
            err => dispatch(createFailure(err))
        );
    };
}

export function getProject({ name }) {
    return (dispatch, getState) => {
        const { user } = getState();
        const { access_token } = user.auth;
        return getProject({ name, token: access_token }).then(
            project => dispatch(getProjectSuccess(project)),
            err     => dispatch(getProjectFailure(err))
        );
    };
}

async function postProject({ name, token }) {
    const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name
        }),
    });

    const json = await response.json();
    return json.data;
}

function createSuccess(project) {
    return {
        type: CREATE_PROJECT_SUCCESS,
        project,
    };
}

function createFailure(err) {
    return {
        type: CREATE_PROJECT_FAILURE,
        error: err,
    };
}

async function getProjects({ token }) {
    const response = await fetch('/api/projects', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        json: true,
    });

    const json = await response.json();
    return json.data;
}

function getProjectsSuccess(projects) {
    return {
        type: GET_PROJECTS_SUCCESS,
        projects,
    };
}

function getProjectsFailure(error) {
    return {
        type: GET_PROJECTS_FAILURE,
        error,
    };
}

async function getProject({ name, token }) {
    const response =  await fetch(`/api/projects/${name}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        json: true,
    });

    const json = await response.json();
    return json.data;
}

function getProjectSuccess(project) {
    return {
        type: GET_PROJECT_SUCCESS,
        project,
    }
}

function getProjectFailure(err) {
    return {
        type: GET_PROJECT_FAILURE,
        error: err,
    };
}
