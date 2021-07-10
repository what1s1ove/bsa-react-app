import { createReducer } from '@reduxjs/toolkit';
import { DataStatus, ActionStatus } from 'common/enums/enums';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './actions';

const initialState = {
  todos: [],
  status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchTodos.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
    const { todos } = payload;

    state.todos = todos;
    state.status = DataStatus.SUCCESS;
  });
  builder.addCase(addTodo.fulfilled, (state, { payload }) => {
    const { todo } = payload;

    state.todos = state.todos.concat(todo);
  });
  builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
    const { todo } = payload;

    state.todos = state.todos.map((it) => {
      return it.id === todo.id ? { ...it, ...todo } : it;
    });
  });
  builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
    const { todo } = payload;

    state.todos = state.todos.filter((it) => it.id !== todo.id);
  });
  builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state) => {
    state.status = DataStatus.ERROR;
  });
});

export { reducer };
