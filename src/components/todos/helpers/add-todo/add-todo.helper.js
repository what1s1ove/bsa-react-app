const addTodo = (todos, todo) => {
  return todos.concat({
    ...todo,
    id: `${Date.now()}`,
  });
};

export { addTodo };
