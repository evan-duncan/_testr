import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION_FAILURE,
    REGISTRATION_SUCCESS,
    DESTROY_SESSION,
} from '../actions/user';

const initialState = {
    id: null,
    email: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    auth: {
        token_type: null,
        access_token: null,
        refresh_token: null,
        expires_in: null,
    },
    validationErrors: {},
};

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;
        case LOGIN_SUCCESS:
            return { ...state, ...action.user };
        case LOGIN_FAILURE:
            return state;
        case REGISTRATION_SUCCESS:
            return { ...state, ...action.user};
        case REGISTRATION_FAILURE:
            return { ...state, validationErrors: { ...action.error.data }};
        case DESTROY_SESSION:
            return initialState;
        default:
            return state;
    }
};

