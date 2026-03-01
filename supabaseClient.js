import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = "https://sjwndltsoscueesxwkny.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqd25kbHRzb3NjdWVlc3h3a255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzOTI5OTUsImV4cCI6MjA4Nzk2ODk5NX0.bu6kjNfLj_5Y7_Aq__KxTAQjmMS71M3fw_9GFVJ-wDk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const authActions = {
    // Giriş (Email)
    signInEmail: async (email, password) => await supabase.auth.signInWithPassword({ email, password }),
    
    // Giriş (GitHub)
    signInGitHub: async () => await supabase.auth.signInWithOAuth({ provider: 'github' }),
    
    // Çıkış (Hata Yönetimli)
    signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw new Error("Çıkış hatası: " + error.message);
    },

    // Admin mi? (Rol Kontrolü)
    isAdmin: async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;
        const { data, error } = await supabase.from('profiles').select('role').eq('id', user.id).single();
        return (!error && data.role === 'admin');
    }
};
