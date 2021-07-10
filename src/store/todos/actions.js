import { DataStatus } from 'common/enums/enums';
import { ActionType } from './common';

const setStatus = (status) => ({
  type: ActionType.SET_STATUS,
  payload: {
    status,
  },
});

const fetchTodos = () => async (dispatch, _getStore, { todosService }) => {
  dispatch(setStatus(DataStatus.PENDING));

  try {
    const todos = await todosService.getAll();

    dispatch({
      type: ActionType.SET_TODOS,
      payload: {
        todos,
      },
    });

    dispatch(setStatus(DataStatus.SUCCESS));
  } catch {
    dispatch(setStatus(DataStatus.ERROR));
  }
};


const addTodo = (payload) => async (dispatch, _getStore, { todosService }) => {
  try {
    const todo = await todosService.create(payload);

    dispatch({
      type: ActionType.ADD,
      payload: {
        todo,
      },
    });
  } catch {
    dispatch(setStatus(DataStatus.ERROR));
  }
};

const updateTodo = (payload) => async (dispatch, _getStore, { todosService }) => {
  try {
    const todo = await todosService.update(payload);

    dispatch({
      type: ActionType.UPDATE,
      payload: {
        todo,
      },
    });
  } catch {
    dispatch(setStatus(DataStatus.ERROR));
  }
};

const deleteTodo = (todo) => async (dispatch, _getStore, { todosService }) => {
  try {
    await todosService.delete(todo.id);

    dispatch({
      type: ActionType.DELETE,
      payload: {
        todo,
      },
    });
  } catch {
    dispatch(setStatus(DataStatus.ERROR));
  }
};

const changeStatus = ({ id, status }) => async (dispatch, _getStore, { todosService }) => {
  try {
    const todo = await todosService.partialUpdate(id, {
      status
    });

    dispatch({
      type: ActionType.UPDATE,
      payload: {
        todo,
      },
    });
  } catch {
    dispatch(setStatus(DataStatus.ERROR));
  }
};

export { fetchTodos, addTodo, updateTodo, changeStatus, deleteTodo };
