import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';

const fetchTodo = createAsyncThunk(ActionType.FETCH_TODO, async (id, { extra }) => ({
  todo: await extra.todosService.getOne (id),
}));

export { fetchTodo };
