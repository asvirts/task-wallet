import { EmailOtpType } from "@supabase/supabase-js"

export type Task = {
  id: number
  name: string
  due_date: Date
  created_on: Date
}

export type User = {
  id: number
  name: string
  email: string
  created_on: date
  expires: Date
}
