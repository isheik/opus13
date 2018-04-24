import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/index';

import tweets from './data/tweets';

const defaultState = {
  tweets: {
    '2195738078': {
      'home': {

      }
    }
  }
};

// Re consider this file contents later
// especially, rootReducer should be difined and combine reducers in reducers dir

// const rootReducer = combineReducers({
//     tweets, routing: routerReducer
// });

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;
