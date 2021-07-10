import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos, todo } from './root-reducer';

const store = createStore(
  combineReducers({
    todos,
    todo,
  }),
  composeWithDevTools(),
);

export { store };
