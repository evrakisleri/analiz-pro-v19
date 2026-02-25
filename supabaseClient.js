import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Frankfurt API - YENİ PROJE BAĞLANTISI
const supabaseUrl = 'https://ocigkkawnfswgtbbehvn.supabase.co'
const supabaseKey = 'sb_publishable_-EGX6faLebUu55Dnb7p3Mg_rW2R9gFC'

// Proje genelinde kullanılacak ana bağlantı
export const supabase = createClient(supabaseUrl, supabaseKey)
