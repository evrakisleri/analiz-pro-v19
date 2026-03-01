import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = "https://sjwndltsoscueesxwkny.supabase.co";
// Kanka, buraya mutlaka anahtarını tırnak içinde yapıştır!
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqd25kbHRzb3NjdWVlc3h3a255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzOTI5OTUsImV4cCI6MjA4Nzk2ODk5NX0.bu6kjNfLj_5Y7_Aq__KxTAQjmMS71M3fw_9GFVJ-wDk"; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
