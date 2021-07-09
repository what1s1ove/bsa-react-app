const updateTodoStatus = (todos, id, status) => {
  return todos.map((it) => (it.id === id ? { ...it, status } : it));
};

export { updateTodoStatus };
