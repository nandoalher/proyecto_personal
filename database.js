import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://fvzcuvzaalefxctzyjsd.supabase.co'
const supabaseKey = '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2emN1dnphYWxlZnhjdHp5anNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTkxMDcsImV4cCI6MjA2NDM3NTEwN30.i6PqIZ5_fmWc3sSlAatqdoB4fxSZvYTxO7YgGfv6hfk>'
export const supabase = createClient(supabaseUrl, supabaseKey)

