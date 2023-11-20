export const GetAllTodos = async () => {
    const res = await fetch("localhost:3001/tasks");
    const todos = await res.json();
    return todos;
  };