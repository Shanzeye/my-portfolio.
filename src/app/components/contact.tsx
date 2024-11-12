import "../styles/contact.css";
import React from 'react';

export default function Contact () {
    return (
            <div id="Contact" className="contact-container">
  <h1 className="contact-header">Contact Me</h1>
  <form className="contact-form">
    <input type="text" placeholder="Name" className="contact-input" />
    <input type="email" placeholder="Email" className="contact-input" />
    <input type="text" placeholder="Subject" className="contact-input" />
    <textarea placeholder="Message" rows={6} className="contact-textarea"></textarea>
    <button type="button" className="contact-button">Send</button>
  </form>
</div>

    )
}