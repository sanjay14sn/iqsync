import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <img src="/images/backgroundcontact.png" alt="background" className="contact-bg" />
        <h1 className="contact-title">CONTACT US</h1>
      </div>

      <div className="contact-main">
        <div className="contact-left">
          <h2>Get In touch with us</h2>
          <p>
            If you have any questions, feedback, or inquiries, please don’t hesitate to
            reach out to us. We value your input and strive to provide you with the
            best possible assistance.
          </p>
        </div>

        <div className="contact-right">
          <h2>We’re here to help!</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <div className="contact-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="🇮🇳 Phone" />
            </div>
            <div className="contact-row">
              <input type="text" placeholder="College Name" />
              <input type="text" placeholder="Interested Domain" />
            </div>
            <textarea placeholder="Message" rows="4" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
