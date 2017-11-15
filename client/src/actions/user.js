
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export function processLogin({ username, password, remember_me }) {
    return dispatch => {
        return postLogin({ username, password, remember_me }).then(
            user => dispatch(loginSuccess(user)),
            err  => dispatch(loginFailure(err))
        );
    };
}

export function processRegistration(creds) {
    return dispatch => {
        return postRegistration(creds).then(
            user => dispatch(registrationSuccess(user)),
            err  => dispatch(registrationFailure(err))
        );
    };
}

function postLogin({ username, password, remember_me }) {
    return fetch('/api/oauth/token', {
        method: 'POST',
        body: {
            username,
            password,
            remember_me,
        },
    });
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
}

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE,
        error: err,
    };
}

function postRegistration({ username, password, password_confirm, email }) {
    return fetch('/api/users', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            username,
            password,
            password_confirm,
            email,
        }),
    });
}

function registrationSuccess(user) {
    return {
        type: REGISTRATION_SUCCESS,
        user,
    };
}

function registrationFailure(err) {
    return {
        type: REGISTRATION_FAILURE,
        error: err,
    };
}

