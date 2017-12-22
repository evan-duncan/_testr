import user from './user';
import app from './app';
import notifications from './notifications';
import projects from './projects';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    app,
    notifications,
    projects,
    user,
    router: routerReducer,
});

export default rootReducer;
