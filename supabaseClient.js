import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-client/+esm'

// 1. Frankfurt Sunucu Bilgileri (Görsellerinden Alındı)
const supabaseUrl = 'https://yicxbmotvnnlwrvubpb.supabase.co'

// 2. Senin API Keys sekmesindeki o uzun ANON_KEY'in
// [ÖNEMLİ]: Görseldeki sb_publishable_k... ile başlayan kodun tamamını buraya yapıştır.
const supabaseKey = 'sb_publishable_k-RSWSryqGfs9231nHNGIQ_uIa4z6zh'

// 3. İstemciyi Oluştur ve Dışa Aktar
export const supabase = createClient(supabaseUrl, supabaseKey)

// 4. Bağlantı Testi (Diğer sayfalarda kullanacağız)
export const checkFrankfurt = async () => {
    const { data, error } = await supabase.from('users').select('id').limit(1);
    return !error;
}
