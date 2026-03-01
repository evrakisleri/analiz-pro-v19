import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Supabase'den aldığın API bilgilerini buraya tırnakların arasına yapıştır
const supabaseUrl = "https://qfzhibovvnpyjhkxlutk.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmemhpYm92dm5weWpoa3hsdXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0MDEyOTAsImV4cCI6MjA4Nzk3NzI5MH0.v_P4OHaMBo_fXVAJd8_FboOub40tULgONXBkBez2Fc8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
