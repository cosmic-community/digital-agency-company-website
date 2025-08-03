import { Resend } from 'resend';
import { ContactFormData } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: ['tony@cosmicjs.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
            ${formData.service_interest ? `<p><strong>Service Interest:</strong> ${getServiceDisplayName(formData.service_interest)}</p>` : ''}
            ${formData.budget_range ? `<p><strong>Budget Range:</strong> ${getBudgetDisplayName(formData.budget_range)}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #0ea5e9; border-radius: 4px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the Digital Agency website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error('Failed to send email');
    }

    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}

function getServiceDisplayName(serviceKey: string): string {
  const serviceMap: Record<string, string> = {
    'web-dev': 'Web Development',
    'design': 'UI/UX Design',
    'seo': 'SEO & Marketing',
    'consulting': 'Consulting',
    'other': 'Other'
  };
  return serviceMap[serviceKey] || serviceKey;
}

function getBudgetDisplayName(budgetKey: string): string {
  const budgetMap: Record<string, string> = {
    '5k-10k': '$5k - $10k',
    '10k-25k': '$10k - $25k',
    '25k-50k': '$25k - $50k',
    '50k+': '$50k+'
  };
  return budgetMap[budgetKey] || budgetKey;
}