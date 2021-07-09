const removeTodo = (todos, todo) => {
  return todos.filter((it) => it.id !== todo.id);
};

export { removeTodo };
