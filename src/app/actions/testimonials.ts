'use server'

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

export async function submitTestimonial(formData: FormData) {
  const rawData = {
    name: formData.get('name') as string,
    role: formData.get('role') as string,
    rating: Number(formData.get('rating')),
    comment: formData.get('comment') as string,
    linkedin_url: formData.get('linkedin_url') as string,
  };

  const headerList = await headers();
  const ip = headerList.get('x-forwarded-for') || '127.0.0.1';

  // Cooldown Check
  const { data: recent } = await supabase
    .from('testimonials')
    .select('id')
    .eq('ip_address', ip)
    .gt('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

  if (recent && recent.length > 0) {
    return { error: "One submission per day allowed." };
  }

  const { error } = await supabase.from('testimonials').insert([
    { 
      ...rawData, 
      ip_address: ip, 
      is_approved: false, 
      is_featured: false
    }
  ]);

  if (error) return { error: "Database error. Try again." };

  revalidatePath('/[locale]/guestbook', 'page');
  revalidatePath('/[locale]/about', 'page');
  
  return { success: "Submitted! It will appear after review." };
}