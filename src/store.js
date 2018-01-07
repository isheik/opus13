import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducer from './reducers/reducer';

import tweets from './data/tweets';

const defaultState = {
    tweets
};

// Re consider this file contents later
// especially, rootReducer should be difined and combine reducers in reducers dir

const rootReducer = combineReducers({
    tweets, routing: routerReducer
});

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;