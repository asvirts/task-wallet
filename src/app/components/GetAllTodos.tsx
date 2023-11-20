export const GetAllTodos = async () => {
    const res = await fetch(`https://localhost:3001/tasks`, { cache: "no-store" });
    const todos = await res.json();
    return todos;
  };