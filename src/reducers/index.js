import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';

// combine reducers. but each reducers have their own states.
const rootReducer = combineReducers({
    tweets, routing: routerReducer
});

export default rootReducer;