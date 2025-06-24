// Test script for EmailJS integration
// Run with: node scripts/test-emailjs.js

const emailjs = require('@emailjs/browser');

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
const EMAILJS_SERVICE_ID = "service_1rruujp";
const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

async function testEmailJS() {
  console.log('🧪 Testing EmailJS Configuration...\n');
  
  const testData = {
    from_name: "Test User",
    from_email: "test@example.com",
    phone: "0612345678",
    message: "This is a test message from the EmailJS test script",
    contact_number: Math.random() * 100000 | 0,
  };

  console.log('📧 Sending test email with the following data:');
  console.log('Service ID:', EMAILJS_SERVICE_ID);
  console.log('Template ID:', EMAILJS_TEMPLATE_ID);
  console.log('Test Data:', testData);
  console.log('\n');

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      testData
    );

    if (response.status === 200) {
      console.log('✅ SUCCESS! Email sent successfully');
      console.log('Response:', response);
    } else {
      console.log('⚠️  Unexpected response status:', response.status);
    }
  } catch (error) {
    console.error('❌ ERROR! Failed to send email');
    console.error('Error details:', error);
    
    if (error.text) {
      console.error('Error message:', error.text);
    }
  }
}

// Run the test
console.log('='.repeat(50));
console.log('EmailJS Integration Test');
console.log('='.repeat(50));
testEmailJS();