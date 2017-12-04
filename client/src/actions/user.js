import { success, error } from './notifications';
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
            user => {
                dispatch(registrationSuccess(user));
                dispatch(success('Successfully registered'));
            },
            err  => {
                dispatch(registrationFailure(err))
                if (typeof err.data === 'object') {
                    for (const [key, value] of Object.entries(err.data)) {
                        dispatch(error(value[0].message, `${key} validation error`));
                    }
                }
            },
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

function postRegistration({ name, password, email }) {
    return fetch('/api/users', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            name,
            password,
            email,
        }),
    })
    .then(res => res.json())
    .then(json => {
        if (json.status > 299) {
            return Promise.reject(json);
        }
        return json;
    });
}

function registrationSuccess(user) {
    return {
        type: REGISTRATION_SUCCESS,
        user: user.data,
    };
}

function registrationFailure(err) {
    return {
        type: REGISTRATION_FAILURE,
        error: err,
    };
}

