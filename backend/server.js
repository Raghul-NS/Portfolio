const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const axios = require('axios');

// Load .env file from the root directory (one level up)
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, org, services, message } = req.body;
    
    // 1. Submit to Google Sheets first
    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    if (!scriptUrl || scriptUrl === 'your_google_sheets_web_app_url_here') {
      console.error('GOOGLE_SHEETS_SCRIPT_URL is not configured in .env');
      return res.status(500).json({ 
        status: 'error', 
        message: 'Server is not fully configured yet. Please set the GOOGLE_SHEETS_SCRIPT_URL in your .env file.' 
      });
    }

    const sheetPayload = {
      name: name || "",
      email: email || "",
      org: org || "",
      services: services || "",
      message: message || ""
    };

    const sheetResponse = await axios.post(scriptUrl, sheetPayload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!sheetResponse.data || sheetResponse.data.status !== 'success') {
      console.error('Google Apps Script failed:', sheetResponse.data);
      return res.status(400).json({ 
        status: 'error', 
        message: sheetResponse.data ? sheetResponse.data.message : 'Apps Script returned an empty response' 
      });
    }

    // 2. Trigger EmailJS if configured
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;
    const contactTemplateId = process.env.EMAILJS_CONTACT_TEMPLATE_ID;

    if (serviceId && publicKey && privateKey && contactTemplateId) {
      try {
        const emailjsPayload = {
          service_id: serviceId,
          template_id: contactTemplateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: {
            to_name: "Raghul N.S", // Receiver's name
            from_name: name || "Anonymous Client",
            from_email: email || "",
            from_org: org || "N/A",
            from_services: services || "N/A",
            message: message || ""
          }
        };

        await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailjsPayload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('EmailJS contact notification sent successfully.');
      } catch (emailError) {
        console.error('EmailJS contact notification failed:', emailError.response ? emailError.response.data : emailError.message);
        // We do not fail the request since Google Sheets submission was successful.
      }
    } else {
      console.warn('EmailJS keys are missing from .env, skipping contact email notification.');
    }

    return res.status(200).json({ status: 'success', message: 'Row added and notification sent' });

  } catch (error) {
    console.error('Backend contact submission error:', error.message);
    const detail = error.response && error.response.data ? ': ' + error.response.data : '';
    return res.status(500).json({ 
      status: 'error', 
      message: 'Server error processing contact submission' + detail
    });
  }
});

// API route to handle newsletter subscriptions
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ status: 'error', message: 'Email address is required.' });
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;
    const newsletterTemplateId = process.env.EMAILJS_NEWSLETTER_TEMPLATE_ID;

    if (!serviceId || !publicKey || !privateKey || !newsletterTemplateId) {
      console.error('EmailJS configurations are missing in .env');
      return res.status(500).json({ 
        status: 'error', 
        message: 'Server is not fully configured for subscriptions. Please set the EmailJS keys in your .env file.' 
      });
    }

    const emailjsPayload = {
      service_id: serviceId,
      template_id: newsletterTemplateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        to_name: "Raghul N.S", // Receiver's name
        subscriber_email: email
      }
    };

    await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailjsPayload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(`Newsletter subscription notification sent for: ${email}`);
    return res.status(200).json({ status: 'success', message: 'Subscribed successfully' });

  } catch (error) {
    console.error('Newsletter subscription error:', error.response ? error.response.data : error.message);
    const detail = error.response && error.response.data ? ': ' + error.response.data : '';
    return res.status(500).json({ 
      status: 'error', 
      message: 'Failed to complete subscription' + detail
    });
  }
});

// Only listen to port if not running in Vercel serverless environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });
}

module.exports = app;
