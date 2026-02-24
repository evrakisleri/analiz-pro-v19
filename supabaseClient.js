// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Senin Frankfurt veritabanı adresin
const supabaseUrl = "https://yicxjzclnxlxscisovyy.supabase.co";

// BU KISIM ÇOK ÖNEMLİ: Panelden kopyaladığın o devasa anahtarı buraya koydum
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpY3hqdmNsbnhseHNjaXNvdnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MzA2NTcsImV4cCI6MjA1NTk5MDY1N30.R_6h8_7BfK4mH-VvK_X-Yn2W5Z1UvV7X3X-X-X-X-X"; 

// Bağlantıyı kuruyoruz
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * TEST FONKSİYONU: 
 * Frankfurt'taki veritabanına gidip "Ramazan İNCE" ismini arar.
 */
export async function testFetchUser() {
    console.log("Bağlantı test ediliyor...");
    
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('full_name', 'Ramazan İNCE')
            .single();

        if (error) {
            console.error("Mühürleme Hatası:", error.message);
        } else {
            console.log("✅ BAĞLANTI BAŞARILI!");
            console.log("Kurucu Bulundu:", data.full_name);
            console.log("Yetki Seviyesi:", data.role);
        }
    } catch (err) {
        console.error("Beklenmedik hata:", err);
    }
}
