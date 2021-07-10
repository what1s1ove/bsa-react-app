import { DataStatus } from 'common/enums/enums';
import { fetchTodo } from './actions';

const initialState = {
  todo: null,
  status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case fetchTodo.pending.type: {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    }
    case fetchTodo.fulfilled.type: {
      const { todo } = payload;

      return {
        ...state,
        status: DataStatus.SUCCESS,
        todo,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
