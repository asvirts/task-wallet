"use client"

import { useEffect, useState, useContext, SetStateAction } from "react"
import { createClient } from "@supabase/supabase-js"

import { Task } from "@/types"
import TaskItem from "./Task"

const supabase = createClient(
  "https://glunwpslyvazmcqzayth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdW53cHNseXZhem1jcXpheXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTU4NTcsImV4cCI6MjAxNjE3MTg1N30.mJ8LTcUuOWalOj_7VRGjJDwo7CBQ29xU4mLeiBfyKDQ"
)

export default function GetAllTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [name, setName] = useState("")

  async function getTasks() {
    let { data }: any = await supabase
      .from("tasks")
      .select("*")
      .order("id", { ascending: true })

    setTasks(data)
  }

  useEffect(() => {
    getTasks()
  }, [tasks])

  const taskList = tasks.map((task: Task) => (
    <div className="flex items-center" key={task?.id}>
      <TaskItem id={task?.id} name={task?.name} deleteTask={deleteTask} />
      <p>id = {task?.id}</p>
    </div>
  ))

  async function addTask() {
    const newTodo = {
      id: Date.now(),
      name: name,
    }

    console.log(newTodo)

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

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    addTask()
    setName("")
  }

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setName(e.target.value)
    console.log(name)
  }

  const tasksNoun = tasks.length !== 1 ? "tasks" : "task"
  const headingText = `${tasks.length} ${tasksNoun} remaining`

  return (
    <>
      <h2 id="list-heading" className="font-bold">
        {headingText}:
      </h2>
      <form onSubmit={handleSubmit} className="my-3">
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          className="input input__lg mr-2"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <ul role="list" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </>
  )
}
