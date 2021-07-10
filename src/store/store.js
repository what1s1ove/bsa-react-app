import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { callApi as callApiMiddleware } from 'store/middlewares/middlewares';
import { todos, todo } from './root-reducer';

const store = createStore(
  combineReducers({
    todos,
    todo,
  }),
  composeWithDevTools(applyMiddleware(callApiMiddleware)),
);

export { store };
