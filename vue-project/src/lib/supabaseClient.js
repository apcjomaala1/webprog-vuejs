import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cwtfhdnxuajujiqmouya.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3dGZoZG54dWFqdWppcW1vdXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NjU5NjUsImV4cCI6MjA1NTE0MTk2NX0.o0VMpdw7KJIxRk6bfkzk53YhWzxeXRr6_2tJpszoSk4'

export const supabase = createClient(supabaseUrl,supabaseKey)