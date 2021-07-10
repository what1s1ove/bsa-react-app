import { getRandomId } from 'helpers/helpers';
import { TodoKey, DataStatus } from 'common/enums/enums';
import { ActionType } from './common';

const setStatus = (status) => ({
  type: ActionType.SET_STATUS,
  payload: {
    status,
  },
});

const setTodos = (todos) => ({
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

const fetchTodos = () => async (dispatch, _getStore, { todosService }) => {
    dispatch(setStatus(DataStatus.PENDING));

    try {
      const todos = await todosService.getAll();

      dispatch(setTodos(todos));

      dispatch(setStatus(DataStatus.SUCCESS));
    } catch {
      dispatch(setStatus(DataStatus.ERROR));
    }
  };

export { fetchTodos, addTodo, updateTodo, changeStatus, deleteTodo };
