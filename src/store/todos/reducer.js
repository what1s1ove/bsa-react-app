import { createReducer } from '@reduxjs/toolkit';
import { DataStatus, ActionStatus } from 'common/enums/enums';
import { fetchTodos, addTodo, updateTodo, deleteTodo, updateTodoHard } from './actions';

const initialState = {
  todos: [],
  status: DataStatus.IDLE,
  isSaving: false,
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
  builder.addCase(updateTodoHard, (state) => {
    state.isSaving = true;
  })
  builder.addCase(`${updateTodoHard.type}/${ActionStatus.FULFILLED}`, (state, { payload }) => {
    const { todo } = payload;

    state.todos = state.todos.map((it) => {
      return it.id === todo.id ? { ...it, ...todo } : it;
    });
    state.isSaving = false;
  })
  builder.addCase(`${updateTodoHard.type}/${ActionStatus.REJECTED}`, (state) => {
    Object.assign(state, initialState);
  })
  builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
    const { todo } = payload;

    state.todos = state.todos.filter((it) => it.id !== todo.id);
  });
  builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state) => {
    state.status = DataStatus.ERROR;
  });
});

export { reducer };
