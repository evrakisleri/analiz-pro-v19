import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://yicxbmotvnnlwrvubpb.supabase.co'
const supabaseKey = 'sb_publishable_k-RSWSryqGfs9231nHNGIQ_uIa4z6zh' // Frankfurt anon key

export const supabase = createClient(supabaseUrl, supabaseKey)
