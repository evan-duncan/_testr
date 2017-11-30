import user from './user';
import app from './app';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    app,
    user,
    router: routerReducer,
});

export default rootReducer;

