import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import exampleReducer from "../reducers/exampleReducer";
import toggleReducer from "../reducers/toggleReducer";

const middleware = [
  reduxThunk,
  // only log redux actions during development
  ...(process.env.NODE_ENV === "production" ? [reduxLogger] : [])
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const reducers = combineReducers({
  example: exampleReducer,
  toggle: toggleReducer
});

export default createStoreWithMiddleware(reducers);
