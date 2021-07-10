import { DataStatus } from 'common/enums/enums';
import { ActionType } from './common';

const setStatus = (status) => ({
  type: ActionType.SET_STATUS,
  payload: {
    status,
  },
});

const fetchTodo = (id) => async (dispatch, _getStore, { todosService }) => {
  dispatch(setStatus(DataStatus.PENDING));

  try {
    const todo = await todosService.getOne(id);

    dispatch({
      type: ActionType.SET_TODO,
      payload: {
        todo
      },
    });

    dispatch(setStatus(DataStatus.SUCCESS));
  } catch {
    dispatch(setStatus(DataStatus.ERROR));
  }
};

export { fetchTodo };
