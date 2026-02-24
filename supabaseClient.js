import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-client/+esm'

// --- Analiz Pro v19 Frankfurt Bağlantı Ayarları ---

// Senin projene özel URL (Değişmez)
const supabaseUrl = 'https://yicxbmotvnnlwrvubpb.supabase.co'

// Supabase Paneli > Settings > API kısmındaki "anon public" key'i buraya yapıştır:
const supabaseKey = 'BURAYA_ANON_KEYINI_YAPISTIR' 

// İstemciyi oluşturuyoruz
export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * TEST FONKSİYONU
 * Bu fonksiyon, veritabanına bağlantının sağlıklı olup olmadığını 
 * kontrol etmek için kullanılır.
 */
export const checkConnection = async () => {
    try {
        const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });
        if (error) throw error;
        console.log("✅ Frankfurt Sunucusu: Bağlantı Sağlıklı.");
        return true;
    } catch (err) {
        console.error("❌ Frankfurt Sunucusu: Bağlantı Başarısız!", err.message);
        return false;
    }
}
