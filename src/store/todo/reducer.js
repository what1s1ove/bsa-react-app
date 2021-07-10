import { DataStatus } from 'common/enums/enums';
import { ActionType } from './common';

const initialState = {
  todo: null,
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
    case ActionType.SET_TODO: {
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
