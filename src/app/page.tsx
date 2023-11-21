import GetAllTodos from "@/components/GetAllTodos";

export const metadata: Metadata = {
  title: "task-wallet",
  description: "Your tasks, with you wherever you go",
};

export default function Home(props) {
  return (
    <main>
      <GetAllTodos />
    </main>
  );
}
