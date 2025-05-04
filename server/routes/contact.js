import express from 'express';
import { body, validationResult } from 'express-validator';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { sendContactEmail } from '../config/emailService.js';

const router = express.Router();

// Test endpoint to verify API is working
router.get('/test', (req, res) => {
  return res.status(200).json({ 
    success: true,
    message: 'API is working correctly'
  });
});

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters')
    .escape(),
  body('email').trim().notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Message is required')
    .isLength({ max: 300 }).withMessage('Message cannot exceed 300 characters')
    .custom(value => {
      // Check for URLs or image patterns
      const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(\[img\])|(<img)/i;
      if (urlPattern.test(value)) {
        throw new Error('Message cannot contain URLs or images');
      }
      return true;
    })
    .escape()
];

// POST - Submit contact form
router.post('/contact', contactLimiter, validateContact, async (req, res, next) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { name, email, message } = req.body;
    
    // Send email
    try {
      await sendContactEmail(name, email, message);
      
      // Return success response
      console.log('Email sent successfully');
      return res.status(200).json({ 
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
    } catch (emailError) {
      console.error('Detailed email error:', emailError);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? emailError.message : undefined
      });
    }
  } catch (error) {
    console.error('General error in contact route:', error);
    next(error);
  }
});

export default router;