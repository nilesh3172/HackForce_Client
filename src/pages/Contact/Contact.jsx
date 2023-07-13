import React, { useState } from 'react';
import "./Contact.css"
import useBackButtonReload from '../../hooks/backbutton';
const ContactUsPage = () => {
  useBackButtonReload();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to send the form data to the server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='body'>
      <h2 style={{textAlign:'center'}}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
