import user from './user';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    user,
    router: routerReducer,
});

export default rootReducer;

