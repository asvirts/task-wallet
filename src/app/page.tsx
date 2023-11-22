import type { Metadata } from "next";
import GetAllTasks from "@/components/GetAllTasks";

export const metadata: Metadata = {
  title: "task-wallet",
  description: "Your tasks, with you wherever you go",
};

export default function Home(props: any) {
  return (
    <main className="p-5">
      <h1 className="font-bold text-4xl">TaskWallet</h1>
      <GetAllTasks />
    </main>
  );
}
