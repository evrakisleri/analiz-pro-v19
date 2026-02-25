import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Frankfurt API Bağlantı Bilgilerin
// Dikkat: URL'nin başında https:// olduğundan ve sonunda boşluk kalmadığından emin ol.
const supabaseUrl ='yicxkbmotvnnlwrvubpb'

// Senin Anon Public Key'in (Panelden aldığımız o uzun kod)
const supabaseKey ='sb_publishable_k-RSWSryqGfs9231nHNGIQ_uIa4z6zh'

// Proje genelinde kullanılacak olan ana bağlantı objesi
export const supabase = createClient(supabaseUrl, supabaseKey)
