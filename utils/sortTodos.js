function sortTodos(todos) {
  const sortedData = {};
  todos.map((todo) => {
    if (!sortedData[todo.status]) sortedData[todo.status] = [];

    sortedData[todo.status].push(todo);
  });

  return sortedData;
}

export { sortTodos };
