import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Frankfurt Bağlantı Bilgilerin
const supabaseUrl = 'https://yicxbmotvnnlwrvubpb.supabase.co'
const supabaseKey = 'sb_publishable_k-RSWsryqGfs9231nHNGIQ_uIA4zT9Hh4E_8O6jA3U7qHhS4HjJ6kL9mN0P1Q2R3S4T5U6V7W8X9Y0Z'

// Proje genelinde kullanılacak olan ana bağlantı
export const supabase = createClient(supabaseUrl, supabaseKey)
