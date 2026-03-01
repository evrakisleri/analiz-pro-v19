import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// URL'i tam olarak şu formatta yaz:
const supabaseUrl = 'https://krhxjjmfzfiraemloksl.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyaHhqam1memZpcmFlbWxva3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzOTA4OTUsImV4cCI6MjA4Nzk2Njg5NX0.TotlpNCTkt6poP1_vWk1UIDlQlfY58ca25hvzn36VbY';

export const supabase = createClient(supabaseUrl, supabaseKey);
