import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import accounts from './accounts';
import activeAccountIndex from './activeAccountIndex';

// combine reducers. but each reducers have their own states.
const rootReducer = combineReducers({
  tweets, accounts, activeAccountIndex, routing: routerReducer,
});

export default rootReducer;
