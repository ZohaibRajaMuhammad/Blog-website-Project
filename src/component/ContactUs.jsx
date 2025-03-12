// import React from "react";
import "../component/ContactUs";
// import Footer from "../component/Footer"; // Import the custom CSS
import ContactImage from "../assets/cotact.avif";

const Contact = () => {
  return (
    
    <div className="Main-aboutdiv">
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>
          Contact us for professional support and assistance. We’d love to hear
          from you!
        </p>
      </div>

      {/* Contact Info Boxes */}
      <div className="contact-info">
        <div className="info-box">
          <span className="icon">🏢</span>
          <h3>Office</h3>
          <p>Victoria Street, London, UK</p>
        </div>

        <div className="info-box">
          <span className="icon">📧</span>
          <h3>Email</h3>
          <p>hello@youremail.com</p>
        </div>

        <div className="info-box">
          <span className="icon">📞</span>
          <h3>Phone</h3>
          <p>900-987-345</p>
        </div>
      </div>

      {/* Map Image */}
      <div className="map-container">
        <img
          src={ContactImage}
          alt="Map Location"
        />
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input  type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone" required />
            <input type="text" placeholder="Subject" required />
          </div>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
    {/* <Footer/> */}
  </div>
  );
};

export default Contact;
