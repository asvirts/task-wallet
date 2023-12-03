import Link from "next/link"
import { auth } from "@/auth"

export default async function Navbar() {
  const session = await auth()
  let link
  let message

  if (!session?.user) {
    link = "/api/auth/signin"
    message = "Sign In"
  } else {
    link = "/api/auth/signout"
    message = "Sign Out"
  }

  return (
    <nav className="flex justify-center py-3">
      <Link href={link} className="px-3 py-2 bg-slate-600 text-white rounded">
        {message}
      </Link>
    </nav>
  )
}
