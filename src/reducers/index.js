import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import accounts from './accounts';
import activeAccount from './activeAccount';

// combine reducers. but each reducers have their own states.
const rootReducer = combineReducers({
  tweets, accounts, activeAccount, routing: routerReducer,
});

export default rootReducer;
