import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gukafyembdokzfegiypo.supabase.co/rest/v1/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1a2FmeWVtYmRva3pmZWdpeXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMTQzNjAsImV4cCI6MjA5NTU5MDM2MH0.iBx8lPfhyX69G7ju9Cp2rKLEYIzXEcnoQoXGPDYgOt4'

export const supabase = createClient(supabaseUrl, supabaseKey)