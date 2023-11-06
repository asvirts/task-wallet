"use client"

import { useState } from "react"

export default function Home() {
  let [num, setNum] = useState(0)

  function inc() {
    setNum(num + 1)
  }

  function dec() {
    setNum(num - 1)
  }

  return (
    <main>
      <p>Number = {num}</p>
      <button onClick={inc} className="bg-slate-600 px-3 py-2 rounded">
        Increment
      </button>
      <button onClick={dec} className="bg-slate-400 px-3 py-2 rounded">
        Decrement
      </button>
    </main>
  )
}
