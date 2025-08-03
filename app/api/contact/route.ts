import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/cosmic';
import { sendContactEmail } from '@/lib/email';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid form data', 
          details: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Submit to Cosmic (save the contact form)
    await submitContactForm(formData);

    // Send email notification
    await sendContactEmail(formData);

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit contact form. Please try again.',
        success: false 
      },
      { status: 500 }
    );
  }
}