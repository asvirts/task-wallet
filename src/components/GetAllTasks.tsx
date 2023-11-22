"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import Form from "./Form";
import { Task } from "@/types";

const supabase = createClient(
  "https://glunwpslyvazmcqzayth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdW53cHNseXZhem1jcXpheXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTU4NTcsImV4cCI6MjAxNjE3MTg1N30.mJ8LTcUuOWalOj_7VRGjJDwo7CBQ29xU4mLeiBfyKDQ"
);

export default function GetAllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const { data } = await supabase.from("tasks").select();
    setTasks(data);
  }

  // function toggleTaskCompleted(id: any) {
  //   const updatedTasks = tasks.map((task: { id: any; completed: any }) => {
  //     // if this task has the same ID as the edited task
  //     if (id === task.id) {
  //       // use object spread to make a new object
  //       // whose `completed` prop has been inverted
  //       return { ...task, completed: !task.completed };
  //     }
  //     return task;
  //   });
  //   setTasks(updatedTasks);
  // }

  // function deleteTask(id: any) {
  //   const remainingTasks = tasks.filter((task: { id: any }) => id !== task.id);
  //   setTasks(remainingTasks);
  // }

  // function addTask(name: any) {
  //   const newTask = { id: `todo-${nanoid()}`, name, completed: false };
  //   setTasks([...tasks, newTask]);
  // }

  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  return (
    <>
      <h2 id="list-heading" className="font-bold">
        {headingText}:
      </h2>
      <ul role="list" aria-labelledby="list-heading">
        {tasks.map((task: Task) => (
          <li key={task.name}>{task.name}</li>
        ))}
      </ul>
    </>
  );
}
