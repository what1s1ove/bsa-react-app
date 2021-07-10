import { getRandomId } from 'helpers/helpers';
import { TodoKey, ENV, ApiPath } from 'common/enums/enums';
import { ActionType } from './common';

const fetchTodos = () => ({
  type: ActionType.FETCH_TODOS,
  payload: {},
  callApi: `${ENV.API.URL}${ApiPath.TODOS}`,
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
