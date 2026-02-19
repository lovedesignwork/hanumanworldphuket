import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = 'Hanuman World <booking@hanumanworldphuket.com>';
export const EMAIL_ADMIN = process.env.ADMIN_EMAIL || 'admin@hanumanworldphuket.com';
export const EMAIL_CONTACT = process.env.CONTACT_EMAIL || 'contact@hanumanworldphuket.com';
