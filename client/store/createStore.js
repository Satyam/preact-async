import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import persons from './persons';

const reducers = combineReducers({
  persons,
  // ....
});

export default initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);
