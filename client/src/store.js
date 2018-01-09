import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from 'lodash.throttle';

export const history = createHistory();
const router = routerMiddleware(history);

/**
 * Attempt to pull state from localstorage and deserialize it back into redux store
 */
function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

/**
 * Serialize JSON and store it in localstorage
 * @param {Object} state
 */
function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        /* Ignore write errors for now. Might be nice to log somewhere */
    }
}

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(router, thunk)
    )
);

/**
 * It is important to have the ability to persist some data on the client.
 * In this case we are going to push state into localstorage at most
 * every second so that on a page refresh the state is back maintained.
 * We don't persist the entire store. We selectively choose the properties
 * within the store that we want to persist on the client.
 */
store.subscribe(throttle(() => saveState({
    user: store.getState().user,
    projects: store.getState().projects,
}), 1000));

export default store;
