export const todosApi = {
  getTodos: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();

    if (!result) {
      throw new Error('Response Error');
    }

    return result;
  },
  deleteTodo: () => {},
  addTodo: () => {},
};
