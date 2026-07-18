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
    
    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    if (!scriptUrl || scriptUrl === 'your_google_sheets_web_app_url_here') {
      console.error('GOOGLE_SHEETS_SCRIPT_URL is not configured in .env');
      return res.status(500).json({ 
        status: 'error', 
        message: 'Server is not fully configured yet. Please set the GOOGLE_SHEETS_SCRIPT_URL in your .env file.' 
      });
    }

    // Format the payload for Google Sheet columns: S.No, Name, Email, Organization, Service, Message, Status
    const payload = {
      name: name || "",
      email: email || "",
      org: org || "",
      services: services || "",
      message: message || ""
    };

    // Forward the POST request to Google Apps Script Web App
    const response = await axios.post(scriptUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data && response.data.status === 'success') {
      return res.status(200).json({ status: 'success', message: 'Row added successfully' });
    } else {
      console.error('Google Apps Script failed:', response.data);
      return res.status(400).json({ 
        status: 'error', 
        message: response.data ? response.data.message : 'Apps Script returned an empty response' 
      });
    }
  } catch (error) {
    console.error('Backend forwarding error:', error.message);
    return res.status(500).json({ 
      status: 'error', 
      message: 'Failed to connect to Google Sheets. Check your script URL and connection.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
