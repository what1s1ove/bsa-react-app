const getTodoById = (todos, id) => {
  return todos.find((it) => it.id === id) ?? null;
};

export { getTodoById };
