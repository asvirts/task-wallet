import type { Metadata } from "next";
import GetAllTodos from "@/components/GetAllTodos";
import GetAllTasks from "@/components/GetAllTasks";

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

export default function Home(props: any) {
  return (
    <main className="p-5">
      <GetAllTodos tasks={DATA} />
      <GetAllTasks />
    </main>
  );
}
