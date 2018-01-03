import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";
// import { browserHistory } from "react-router";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import reducer from "./reducers/reducer";

const rootReducer = combineReducers({
    reducer, routing: routerReducer
});

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;