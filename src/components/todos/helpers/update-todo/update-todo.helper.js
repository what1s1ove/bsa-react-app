const updateTodo = (todos, todo) => {
  return todos.map((it) => (it.id === todo.id ? todo : it));
};

export { updateTodo };
