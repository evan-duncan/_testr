import {
    GET_PROJECTS_FAILURE,
    GET_PROJECTS_SUCCESS,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAILURE,
} from '../actions/project';

const initialState = [];

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS_SUCCESS:
            return [...action.projects];
        case GET_PROJECTS_FAILURE:
            return state;
        case CREATE_PROJECT_SUCCESS:
            return [...state, action.project];
        case CREATE_PROJECT_FAILURE:
          return state;
        default:
            return state;
    }
};
