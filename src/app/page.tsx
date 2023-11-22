import GetAllTasks from "@/components/GetAllTasks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskWallet",
  description: "Your tasks, with you wherever you go",
};

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="font-bold text-4xl">TaskWallet</h1>
      <GetAllTasks />
    </main>
  );
}
