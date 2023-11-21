"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

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

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.name}>{task.name}</li>
      ))}
    </ul>
  );
}
