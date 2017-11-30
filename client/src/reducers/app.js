import {
    HAS_FOOTER,
    HAS_HEADER,
} from '../actions/app';

const initialState = {
    has_header: true,
    has_footer: true,
};

export default (state=initialState, action) => {
    switch (action.type) {
        case HAS_FOOTER: 
            return { ...state, has_footer: action.has_footer };
        case HAS_HEADER:
            return { ...state, has_header: action.has_header };
        default:
            return state;
    }
}
