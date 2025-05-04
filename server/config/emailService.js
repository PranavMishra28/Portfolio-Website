import Mailjet from 'node-mailjet';
import dotenv from 'dotenv';

dotenv.config();

// Use the current Mailjet SDK version (v6+)
let mailjet;
try {
  // Initialize Mailjet with v6+ syntax
  mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY || '',
    apiSecret: process.env.MAILJET_SECRET_KEY || ''
  });
  console.log("Successfully initialized Mailjet client");
} catch (error) {
  console.error("Failed to initialize Mailjet:", error.message);
}

export const sendContactEmail = async (name, email, message) => {
  try {
    console.log('Attempting to send email via Mailjet...');
    
    // Check environment variables
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_SECRET_KEY) {
      console.error('Missing Mailjet API credentials');
      throw new Error('Missing Mailjet API credentials in environment variables');
    }
    
    // If mailjet wasn't initialized properly, try again
    if (!mailjet) {
      console.log('Reinitializing Mailjet client...');
      mailjet = new Mailjet({
        apiKey: process.env.MAILJET_API_KEY,
        apiSecret: process.env.MAILJET_SECRET_KEY
      });
    }
    
    // For debugging: show available keys
    console.log('Environment variables available:', 
      Object.keys(process.env)
        .filter(key => key.includes('MAIL') || key.includes('EMAIL'))
        .map(key => `${key}: ${process.env[key] ? '[SET]' : '[EMPTY]'}`)
    );
    
    // Create request data
    const emailData = {
      Messages: [
        {
          From: {
            Email: process.env.FROM_EMAIL || 'mishrapranav82@gmail.com',
            Name: 'Portfolio Contact Form'
          },
          To: [
            {
              Email: process.env.RECIPIENT_EMAIL || 'mishrapranav82@gmail.com',
              Name: 'Pranav Mishra'
            }
          ],
          Subject: `New Contact from ${name}`,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
          TextPart: `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
          ReplyTo: {
            Email: email,
            Name: name
          }
        }
      ]
    };
    
    console.log('Email data prepared, sending now...');
    
    // Send email with better error handling
    try {
      const response = await mailjet
        .post('send', { version: 'v3.1' })
        .request(emailData);
        
      console.log('Email sent successfully with status:', response.status);
      return response.body;
    } catch (sendError) {
      console.error('Detailed Mailjet send error:', sendError.message);
      // Check if it's a credential error
      if (sendError.statusCode === 401) {
        throw new Error('Authentication failed: Please check your Mailjet API credentials');
      }
      throw sendError;
    }
  } catch (error) {
    console.error('Error in sendContactEmail:', error.message);
    throw error;
  }
};