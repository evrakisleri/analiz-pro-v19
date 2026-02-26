import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://ocigkkawnfswgtbbehvn.supabase.co'
const supabaseKey = 'sb_publishable_-EGX6faLebUu55Dnb7p3Mg_rW2R9gFC'

export const supabase = createClient(supabaseUrl, supabaseKey)
