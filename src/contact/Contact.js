import React, { useRef, useState } from 'react';
import './Contact.css';
import Footer from '../footer/Footer';
import emailjs from 'emailjs-com';

import { toast } from 'react-toastify';

const Contact = () => {

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3sq7yeb', 'template_o4z1luo', form.current, 
         "LGbbRgPYxfioghAfa",
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          toast.success("Message send successfully");
          setSubmitted(true);
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Oops! Something went wrong!")
        },
      );
  };
  
  
    return (
      <>
        <section id="contact">
            <div className="contact-container">
                <div className="contact-image">
                    <img src='/contact-img.webp' alt="Contact" />
                </div>
                <div className="contact-form">
                    <h1>Contact Me</h1>
                    <p>I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.</p>
                    <form onSubmit={sendEmail} ref={form}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="from_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="from_email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                    {submitted && <p className="thank-you-message">Thank you for your message! I'll get back to you soon.</p>}
          
                </div>
            </div>
            <div className="contact-note">
                <p>Connect with me and let's build something amazing together!</p>
               
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default Contact;
