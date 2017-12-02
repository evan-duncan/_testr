import user from './user';
import app from './app';
import notifications from './notifications';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    app,
    notifications,
    user,
    router: routerReducer,
});

export default rootReducer;
