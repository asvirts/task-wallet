import { auth } from "@/auth"

export default async function Me() {
  const session = await auth()

  const userId = 1

  return <div>{JSON.stringify(session, null, 2)}</div>
}
