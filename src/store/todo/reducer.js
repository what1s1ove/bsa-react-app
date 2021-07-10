import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from 'common/enums/enums';
import { fetchTodo } from './actions';

const initialState = {
  todo: null,
  status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchTodo.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(fetchTodo.fulfilled, (state, { payload }) => {
    const { todo } = payload;

    state.todo = todo;
    state.status = DataStatus.SUCCESS;
  });
});

export { reducer };
