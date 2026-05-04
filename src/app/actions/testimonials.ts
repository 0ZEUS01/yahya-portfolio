'use server'

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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

  // Insert into Database
  const { error } = await supabase.from('testimonials').insert([
    { 
      ...rawData, 
      ip_address: ip, 
      is_approved: false, 
      is_featured: false
    }
  ]);

  if (error) return { error: "Database error. Try again." };

  // --- SEND EMAIL NOTIFICATION ---
  try {
    await resend.emails.send({
      from: 'Portfolio Guestbook <onboarding@resend.dev>', 
      to: 'zini.yahya22@gmail.com',
      subject: `New Guestbook Review from ${rawData.name} 🚀`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">New Review Needs Approval</h2>
          <p>Someone just left a review on your portfolio guestbook!</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${rawData.name}</p>
            <p><strong>Role:</strong> ${rawData.role}</p>
            <p><strong>Rating:</strong> ${rawData.rating}/5 ⭐️</p>
            <p><strong>LinkedIn:</strong> ${rawData.linkedin_url || 'None provided'}</p>
          </div>

          <p><strong>What they said:</strong></p>
          <blockquote style="border-left: 4px solid #cbd5e1; padding-left: 15px; font-style: italic; color: #475569;">
            ${rawData.comment}
          </blockquote>

          <div style="margin-top: 30px;">
            <a href="https://supabase.com/dashboard/projects" style="background-color: #0f172a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Open Supabase to Approve
            </a>
          </div>
        </div>
      `
    });
  } catch (emailError) {
    console.error("Failed to send email notification:", emailError);
  }

  revalidatePath('/[locale]/guestbook', 'page');
  revalidatePath('/[locale]/about', 'page');
  
  return { success: "Submitted! It will appear after review." };
}