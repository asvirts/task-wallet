import GetAllTodos from "@/components/GetAllTodos";

export const metadata: Metadata = {
  title: "task-wallet",
  description: "Your tasks, with you wherever you go",
};

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
  { id: "todo-3", name: "Grind", completed: true },
];

export default function Home(props) {
  return (
    <main>
      <GetAllTodos tasks={DATA} />
    </main>
  );
}
