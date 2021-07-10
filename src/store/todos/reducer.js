import { DataStatus } from 'common/enums/enums';
import { ActionType } from './common';

const initialState = {
  todos: [],
  status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_STATUS: {
      const { status } = payload;

      return {
        ...state,
        status,
      };
    }
    case ActionType.SET_TODOS: {
      const { todos } = payload;

      return {
        ...state,
        todos,
      };
    }
    case ActionType.ADD: {
      const { todo } = payload;

      return {
        ...state,
        todos: state.todos.concat(todo),
      };
    }
    case ActionType.UPDATE: {
      const { todo } = payload;

      return {
        ...state,
        todos: state.todos.map((it) => {
          return it.id === todo.id ? { ...todo, ...todo } : it;
        }),
      };
    }
    case ActionType.DELETE: {
      const { todo } = payload;

      return {
        ...state,
        todos: state.todos.filter((it) => it.id !== todo.id),
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
