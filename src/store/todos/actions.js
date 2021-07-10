import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';

const updateTodoHard = createAction(ActionType.HARD_UPDATE, (todo) => ({
  payload: {
    todo
  }
}));

const fetchTodos = createAsyncThunk(ActionType.FETCH_TODOS, async (_args, { extra }) => ({
  todos: await extra.todosService.getAll(),
}));

const addTodo = createAsyncThunk(ActionType.ADD, async (payload, { extra }) => ({
  todo: await extra.todosService.create(payload),
}))

const updateTodo = createAsyncThunk(ActionType.UPDATE, async (payload, { extra }) => ({
  todo: await extra.todosService.update(payload),
}));

const deleteTodo = createAsyncThunk(ActionType.DELETE, async (todo, { extra }) => {
  await extra.todosService.delete(todo.id);

  return {
    todo,
  };
});

const changeStatus = createAsyncThunk(ActionType.UPDATE, async ({ id, status }, { extra }) => ({
  todo: await extra.todosService.partialUpdate(id, {
    status,
  }),
}));

export {
  fetchTodos,
  addTodo,
  updateTodoHard,
  updateTodo,
  changeStatus,
  deleteTodo,
};
