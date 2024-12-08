import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
  const serviceId = "service_pu3qfq9";  // Replace with your EmailJS service ID
  const templateId = "template_lyik03r";  // Replace with your EmailJS template ID
  const userId = "mGqhOdgAFmPQMor-V";  // Replace with your EmailJS user ID

  emailjs.send(serviceId, templateId, formData, userId)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
};
