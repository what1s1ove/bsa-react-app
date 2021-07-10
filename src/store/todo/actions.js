import { todos } from 'database.json';
import { ActionType } from './common';

const fetchTodo = (id) => {
  const todo = todos.find((it) => it.id === id);

  return {
    type: ActionType.SET_TODO,
    payload: {
      todo,
    },
  };
};

export { fetchTodo };
