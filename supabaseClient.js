import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-client/+esm'

// Senin son paylaştığın proje ID'sine (yicx...) göre güncellendi
const supabaseUrl = 'https://yicxbmotvnnlwrvubpb.supabase.co'
const supabaseKey = 'BURAYA_SUPABASE_ANON_KEYINI_YAPISTIR' 

export const supabase = createClient(supabaseUrl, supabaseKey)
