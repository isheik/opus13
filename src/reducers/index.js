import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import accounts from './accounts';

// combine reducers. but each reducers have their own states.
const rootReducer = combineReducers({
  tweets, accounts, routing: routerReducer,
});

export default rootReducer;
