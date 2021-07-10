import { getRandomId } from 'helpers/helpers';
import { TodoKey } from 'common/enums/enums';
import { todos } from 'database.json';
import { ActionType } from './common';

const fetchTodos = () => ({
  type: ActionType.SET_TODOS,
  payload: {
    todos,
  },
});

const addTodo = (todo) => ({
  type: ActionType.ADD,
  payload: {
    todo: {
      ...todo,
      [TodoKey.ID]: getRandomId(),
    },
  },
});

const updateTodo = (todo) => ({
  type: ActionType.UPDATE,
  payload: {
    todo,
  },
});

const deleteTodo = (todo) => ({
  type: ActionType.DELETE,
  payload: {
    todo,
  },
});

const changeStatus = ({ id, status }) => ({
  type: ActionType.CHANGE_STATUS,
  payload: {
    id,
    status,
  },
});

export { fetchTodos, addTodo, updateTodo, changeStatus, deleteTodo };
