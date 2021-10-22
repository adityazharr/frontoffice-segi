import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supbaseKey);
    }

    getProduct(service_id: number) {
        return this.supabase
            .from('products')
            .select().eq('service_id', service_id);
    }

    getServiceBySlug(slug: string) {
        return this.supabase.from('service').select().eq('slug', slug).single();
    }

    getAllService() {
        return this.supabase.from('service').select();
    }

    getAllArticle() {
        return this.supabase.from('articles').select();
    }

    getDetailArticle(slug: string) {
        return this.supabase.from('articles').select().eq('slug', slug).single();
    }
}