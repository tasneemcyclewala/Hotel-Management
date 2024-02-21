import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uahjedsusgbznompzhaa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhaGplZHN1c2diem5vbXB6aGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NTE2NzEsImV4cCI6MjAyMTIyNzY3MX0.BzCi6c7FOmlPzWwxHGILgD_uyDPhkJ8b0kzAmovPVNo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
