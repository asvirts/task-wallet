"use client"

import { useEffect, useState, useContext } from "react"
import { createClient } from "@supabase/supabase-js"

import { Task } from "@/types"
import TaskItem from "./Task"
import Form from "./Form"

const supabase = createClient(
  "https://glunwpslyvazmcqzayth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdW53cHNseXZhem1jcXpheXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTU4NTcsImV4cCI6MjAxNjE3MTg1N30.mJ8LTcUuOWalOj_7VRGjJDwo7CBQ29xU4mLeiBfyKDQ"
)

export default function GetAllTasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  async function getTasks() {
    let { data }: any = await supabase.from("tasks").select("*")

    setTasks(data)
  }

  useEffect(() => {
    getTasks()
  }, [tasks])

  const taskList = tasks.map((task: Task) => (
    <>
      <TaskItem
        id={task.id}
        name={task.name}
        key={task.id}
        deleteTask={deleteTask}
      />
      <p>id = {task.id}</p>
    </>
  ))

  const addTask = async (name: string) => {
    const newTodo = {
      id: Date.now(),
      name: name,
    }

    const { data }: any = await supabase.from("tasks").insert(newTodo).select()
    setTasks((previousTasks) => [data, ...previousTasks])
  }

  async function deleteTask(id: number) {
    const remainingTasks = tasks.filter(
      (task: { id: number }) => id !== task.id
    )

    const { data } = await supabase.from("tasks").delete().eq("id", id)

    setTasks(remainingTasks)
  }

  const tasksNoun = tasks.length !== 1 ? "tasks" : "task"
  const headingText = `${tasks.length} ${tasksNoun} remaining`

  return (
    <>
      <h2 id="list-heading" className="font-bold">
        {headingText}:
      </h2>
      <Form addTask={addTask} />
      <ul role="list" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </>
  )
}
