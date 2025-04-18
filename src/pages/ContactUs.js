import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Us</h2>

      {/* Contact Form Section */}
      <div className="contact-section">
        <div className="card">
          <h4 className="card-title">Send Us a Message</h4>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="contact-section">
        <div className="card text-center">
          <h4 className="card-title">Our Contact Details</h4>
          <ul className="contact-list">
            <li><strong>Email:</strong> mithilaeats@gmail.com</li>
            <li><strong>Phone:</strong> +91 8676860092</li>
            <li><strong>Address:</strong> Darbhanga, Bihar, India</li>
            <li><strong>Working Hours:</strong> Mon - Sat, 9 AM - 6 PM</li>
          </ul>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="contact-section">
        <div className="card">
          <h4 className="card-title">Find Us on Google Maps</h4>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4531.631308347082!2d85.90539597991398!3d26.14442888848434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb841a2837709%3A0x11b01f90483f132!2sDonar%20Chowk%2C%20Laheriasarai%2C%20Darbhanga%2C%20Bihar%20846009!5e0!3m2!1sen!2sin!4v1742552998498!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
