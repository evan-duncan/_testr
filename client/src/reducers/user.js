import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/user';

const initialState = {
    id: null,
    username: null,
    email: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    date_of_birth: null,
    token: null,
};

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            console.log('request: ', action);
            console.log('state: ', state);
            return state;
        case LOGIN_SUCCESS:
            console.log('success: ', action);
            console.log('state: ', state);
            return state;
        case LOGIN_FAILURE:
            console.log('failure: ', action);
            console.log('state: ', state);
            return state;
        default:
            return state;
    }
};

