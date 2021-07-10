import { DataStatus } from 'common/enums/enums';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './actions';

const initialState = {
  todos: [],
  status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case fetchTodos.pending.type: {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    }
    case fetchTodos.fulfilled.type: {
      const { todos } = payload;

      return {
        ...state,
        status: DataStatus.SUCCESS,
        todos,
      };
    }
    case fetchTodos.rejected.type: {
      return {
        ...state,
        status: DataStatus.ERROR,
      };
    }
    case addTodo.fulfilled.type: {
      const { todo } = payload;

      return {
        ...state,
        todos: state.todos.concat(todo),
      };
    }
    case updateTodo.fulfilled.type: {
      const { todo } = payload;

      return {
        ...state,
        todos: state.todos.map((it) => {
          return it.id === todo.id ? { ...todo, ...todo } : it;
        }),
      };
    }
    case deleteTodo.fulfilled.type: {
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
