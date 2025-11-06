import './contact.css';

import React, { useRef, useState, useEffect } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import ScrollAnimation from '../animations/ScrollAnimation';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('P7QLsiayjNDohhRHw'); // Replace with your Public Key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(false);
    setError('');
    
    emailjs
      .sendForm(
        'service_ard7ybj', // Replace with your Service ID
        'template_umf54xt', // Replace with your Template ID
        formRef.current,
        'P7QLsiayjNDohhRHw' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
          setMessage(true);
          e.target.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setMessage(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error);
          setError(`Failed to send message: ${error.text || 'Unknown error'}`);
        }
      );
  };
  return (
    <section id="contact">
      <ScrollAnimation animation="fadeInDown" delay={0.1}>
        <h5>Get In Touch</h5>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.3}>
        <h2>Contact Me</h2>
      </ScrollAnimation>
      <div className="container contact__container">
        <ScrollAnimation animation="fadeInLeft" delay={0.4}>
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>garibesangmesh@gmail.com</h5>
              <a href="mailto:garibesangmesh@gmail.com">Send a message</a>
            </article>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInRight" delay={0.5}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && <span style={{color: 'green'}}>Thanks, I'll reply ASAP :)</span>}
            {error && <span style={{color: 'red'}}>{error}</span>}
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
