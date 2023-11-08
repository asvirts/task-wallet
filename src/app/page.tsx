"use client"

import { useState } from "react"

export default function Home() {
  const TodoList = ({ todos }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </ul>
    )
  }

  const Todo = ({ text, completed }) => {
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            // TODO: Update the todo list
          }}
        />
        {text}
      </li>
    )
  }

  return TodoList
}
