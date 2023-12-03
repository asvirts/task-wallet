import GetAllTasks from "@/app/components/GetAllTasks"
import type { Metadata } from "next"
import { auth } from "@/auth"

export const metadata: Metadata = {
  title: "TaskWallet",
  description: "Your tasks, with you wherever you go",
}

export default async function Home() {
  const session = await auth()

  if (!session?.user) {
    return <h1 className="text-xl flex justify-center">Not logged in...</h1>
  } else
    return (
      <main className="p-5">
        <h1 className="font-bold text-4xl">TaskWallet</h1>
        <GetAllTasks />
      </main>
    )
}
