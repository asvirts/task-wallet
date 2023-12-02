import GetAllTasks from "@/app/components/GetAllTasks"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"

export const metadata: Metadata = {
  title: "TaskWallet",
  description: "Your tasks, with you wherever you go",
}

export default function Home({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className="p-5">
      <h1 className="font-bold text-4xl">TaskWallet</h1>
      <SessionProvider session={session}>
        <GetAllTasks {...pageProps} />
      </SessionProvider>
    </main>
  )
}
