export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

/**
 * Validates contact form fields on the client or server side.
 */
export function validateContactPayload(payload: ContactPayload): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!payload.subject || payload.subject.trim().length < 3) {
    errors.subject = 'Please provide a subject (at least 3 characters).';
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.message = 'Please provide a message (at least 10 characters).';
  }

  return errors;
}

/**
 * Client-side submission helper that delivers directly to amit20052020@gmail.com
 * Powered by FormSubmit.co AJAX endpoint (free, serverless, direct inbox delivery).
 */
export async function submitContactMessage(payload: ContactPayload): Promise<ContactApiResponse> {
  // Validate input before network call
  const errors = validateContactPayload(payload);
  if (Object.keys(errors).length > 0) {
    throw new Error(Object.values(errors)[0]);
  }

  const response = await fetch('https://formsubmit.co/ajax/amit20052020@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name.trim(),
      email: payload.email.trim(),
      _replyto: payload.email.trim(),
      _subject: `[Portfolio] ${payload.subject.trim()} - from ${payload.name.trim()}`,
      subject: payload.subject.trim(),
      message: payload.message.trim(),
      _template: 'table',
      _captcha: 'false',
    }),
  });

  if (!response.ok) {
    let errorText = 'Failed to send message. Please try again.';
    try {
      const errData = await response.json();
      if (errData.message) errorText = errData.message;
    } catch {
      // ignore
    }
    throw new Error(errorText);
  }

  await response.json().catch(() => ({ success: true }));

  return {
    success: true,
    message: 'Message delivered to Amit! Thank you for reaching out, I will reply shortly.',
    timestamp: new Date().toISOString(),
  };
}
