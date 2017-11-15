import {
    FLASH_SUCCESS,
    FLASH_DANGER,
    FLASH_INFO,
    FLASH_WARNING,
} from '../actions/flashMessages';

const initialState = {
    successes: [],
    dangers: [],
    infos: [],
    warnings: [],
};

export default (state=initialState, action) => {
    switch (action.type) {
        case FLASH_SUCCESS:
            state.successes.push(action.message);
            return state;
        case FLASH_DANGER:
            state.dangers.push(action.message);
            return state;
        case FLASH_INFO:
            state.infos.push(action.message);
            return state;
        case FLASH_WARNING:
            state.warnings.push(action.message);
            return state;
        default:
            return state;
    }
};

