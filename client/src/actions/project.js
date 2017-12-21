export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJCETS_FAILURE';

export function getProjects({ token }) {
    return dispatch => {
        return getProjects({ token }).then(
            projects => dispatch(getSuccess(projects)),
            err      => dispatch(getFailure(err))
        );
    };
}

export function createProject({ name, token }) {
    return dispatch => {
        return postProject({ name, token }).then(
            project => dispatch(createSuccess(project)),
            err     => dispatch(createFailure(err))
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

    return response;
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
    return await fetch('/api/projects', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        json: true,
    });
}

function getSuccess(projects) {
    return {
        type: GET_PROJECTS_SUCCESS,
        projects,
    };
}

function getFailure(error) {
    return {
        type: GET_PROJECTS_FAILURE,
        error,
    };
}
