import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos as todosService } from 'services/services';
import { thunk as thunkMiddleware } from 'store/middlewares/middlewares';
import { todos, todo } from './root-reducer';

const store = createStore(
  combineReducers({
    todos,
    todo,
  }),
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({
        todosService,
      }),
    ),
  ),
);

export { store };
