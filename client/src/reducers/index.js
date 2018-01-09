import user from './user';
import app from './app';
import notifications from './notifications';
import projects from './projects';
import project from './project';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    app,
    notifications,
    project,
    projects,
    user,
    router: routerReducer,
});

export default rootReducer;
