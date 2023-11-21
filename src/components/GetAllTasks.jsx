"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://glunwpslyvazmcqzayth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdW53cHNseXZhem1jcXpheXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTU4NTcsImV4cCI6MjAxNjE3MTg1N30.mJ8LTcUuOWalOj_7VRGjJDwo7CBQ29xU4mLeiBfyKDQ"
);

export default function GetAllTasks() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}
