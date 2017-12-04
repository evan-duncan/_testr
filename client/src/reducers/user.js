import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION_FAILURE,
    REGISTRATION_SUCCESS,
} from '../actions/user';

const initialState = {
    id: null,
    email: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    date_of_birth: null,
    token: null,
    validationErrors: {},
};

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;
        case LOGIN_SUCCESS:
            return state;
        case LOGIN_FAILURE:
            return state;
        case REGISTRATION_SUCCESS:
            return { ...state, ...action.user};
        case REGISTRATION_FAILURE:
            return { ...state, validationErrors: { ...action.error.data }};
        default:
            return state;
    }
};

