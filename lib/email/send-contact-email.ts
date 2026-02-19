import { resend, EMAIL_FROM, EMAIL_CONTACT } from './resend';
import ContactFormEmail from './templates/ContactFormEmail';
import ContactAutoReply from './templates/ContactAutoReply';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactFormEmail(data: ContactFormData) {
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  try {
    // Send notification to admin
    const adminResult = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_CONTACT,
      replyTo: data.email,
      subject: `[Contact Form] ${data.subject} - from ${data.name}`,
      react: ContactFormEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        submittedAt,
      }),
    });

    if (adminResult.error) {
      console.error('Error sending admin notification:', adminResult.error);
      throw new Error(adminResult.error.message);
    }

    // Send auto-reply to customer
    const customerResult = await resend.emails.send({
      from: EMAIL_FROM,
      to: data.email,
      subject: `Thank you for contacting Hanuman World Phuket`,
      react: ContactAutoReply({
        name: data.name,
        subject: data.subject,
      }),
    });

    if (customerResult.error) {
      console.error('Error sending auto-reply:', customerResult.error);
      // Don't throw here - admin notification was sent successfully
    }

    return { success: true, adminEmailId: adminResult.data?.id };
  } catch (error) {
    console.error('Error in sendContactFormEmail:', error);
    throw error;
  }
}
