import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wyjbsxtrcwtxyhhoohtm.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5amJzeHRyY3d0eHloaG9vaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjU1MjQsImV4cCI6MjA3NzMwMTUyNH0.2EkIL2BfL1FLzGbAxIMShxjvOJ-anlx4O6Iy8BYbbCs";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
