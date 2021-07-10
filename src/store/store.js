import { configureStore } from '@reduxjs/toolkit';
import { todos as todosService } from 'services/services';
import { todos, todo } from './root-reducer';

const store = configureStore({
  reducer: {
    todos,
    todo,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          todosService,
        },
      },
    });
  },
});

export { store };
