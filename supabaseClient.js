// benimsupabase/supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://ocigkkawnfswgtbbehvn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jaWdra2F3bmZzd2d0YmJlaHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNjI4MDksImV4cCI6MjA4NzYzODgwOX0.nXUrnB7SZHFZ0YQ5fUQTsbIgGxQ0xAr_Gk1aODd-du0'; // sadece anon key kullan!
export const supabase = createClient(supabaseUrl, supabaseKey);
