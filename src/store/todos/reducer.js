import { DataLoadStatus, DataStatus } from 'common/enums/enums';
import { ActionType } from './common';

const initialState = {
  todos: [],
  status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_TODOS: {
      const { todos } = payload;

      return {
        ...state,
        todos,
      };
    }
    case `${ActionType.FETCH_TODOS}${DataLoadStatus.START}`: {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    }
    case `${ActionType.FETCH_TODOS}${DataLoadStatus.SUCCESS}`: {
      const { response: todos } = payload;

      return {
        ...state,
        status: DataStatus.SUCCESS,
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
    case ActionType.CHANGE_STATUS: {
      const { id, status } = payload;

      return {
        ...state,
        todos: state.todos.map((it) => {
          return it.id === id ? { ...it, status: status } : it;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
