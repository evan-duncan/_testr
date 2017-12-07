import { success, error } from './notifications';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const DESTROY_SESSION = 'DESTROY_SESSION';

export function processLogin({ email, password }) {
    return dispatch => {
        return postLogin({ email, password }).then(
            token => dispatch(loginSuccess(token)),
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

export function destroySession() {
    return {
        type: DESTROY_SESSION,
    };
}

async function postLogin({ email, password }) {
    let response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    });

    const token = await response.json();

    response = await fetch('/api/users/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token.access_token}`
        }
    });

    const user = await response.json();
    return {
        ...user.data,
        auth: { ...token },
    };
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

