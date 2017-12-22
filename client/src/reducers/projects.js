import {
    GET_PROJECTS_FAILURE,
    GET_PROJECTS_SUCCESS,
} from '../actions/project';

const initialState = [];

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS_SUCCESS:
            return [...action.projects];
        case GET_PROJECTS_FAILURE:
            return state;
        default:
            return state;
    }
};
