import { 
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAILURE,
} from '../actions/project';

const initialState = {
    id: null,
    name: null,
    owner: {},
    owner_id: null,
};

export default (state=initialState, action) => {
    switch(action.type) {
        case GET_PROJECT_SUCCESS:
            return { ...action.project };
        case GET_PROJECT_FAILURE:
            return state;
        default:
            return state;
    }
};
