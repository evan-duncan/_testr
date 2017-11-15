import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createHistory();
const router = routerMiddleware(history);

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(router, thunk)
    )
);

