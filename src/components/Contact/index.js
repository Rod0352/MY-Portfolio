import { validateEmail } from '../../utils/helpers';
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('user_id');

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
      const serviceId = 'service_id';
      const templateId = 'template_id';
      const userId = 'user_id';
      const templateParams = {
        name,
        email,
        message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error))


      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  };
  return (
    <div className=' form row g-3 align-items-center'>
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button onClick={submit}>Send Message</button>
      <span className={emailSent ? 'visible' : null}>Thank you for your message, I will be in touch in no time!</span>
    </div>
  );
};

export default Contact;