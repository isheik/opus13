import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import accounts from './accounts';
import activeAccountIndex from './activeAccountIndex';
import editorText from './editorText';
import reply from './reply';

// combine reducers. but each reducers have their own states.
const rootReducer = combineReducers({
  tweets, accounts, activeAccountIndex, editorText, reply, routing: routerReducer,
});

export default rootReducer;
