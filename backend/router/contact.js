import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import Joi from 'joi';

// Define a schema for your contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

// Define a Joi schema for validation
const contactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).max(500).required(),
});

// Handle form submission
router.post('/contact', async (req, res) => {
  try {
    // Validate the request body against the Joi schema
    const { error } = contactValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error); // Log the error
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

export default router;
