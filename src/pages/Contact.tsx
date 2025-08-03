import React, { useState } from 'react';
import '../css/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'general',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '918275172931'; // Replace with your WhatsApp number (without +)
    const message = `Hello, I would like to get in touch:\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <div
        className="contact-hero"
        style={{
          backgroundImage: "url('/images/page.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="contact-overlay"></div>
        <div className="contact-container">
          <div className="contact-hero-content">
            <p className="contact-breadcrumbs">
              <a href="/">Home</a> <span>/ Contact</span>
            </p>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="contact-main">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Dr. Dhanshree's Dental Clinic</h2>
          <div className="contact-info-grid">
            <div>
              <p>
                <span>Address: </span>
                <a
                  href="https://www.google.com/maps?q=Dr.+DHANSHREE'S+Dental+Clinic,+Muktai+Plaza,+Wadgaon+Shinde+Road,+Lohegaon,+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop no. 2, Muktai Plaza, Wadgaon Shinde Road,<br />
                  Opp. Eastern Royale Society, Pathare Wasti,<br />
                  Lohegaon, Pune, Maharashtra 411047
                </a>
              </p>
            </div>

            <div>
              <p>
                <span>Phone: </span>
                <a href="tel:+918275172931">+91 82751 72931</a>
              </p>
            </div>

            <div>
              <p>
                <span>Email: </span>
                <a href="mailto:dr.dhanshreedentalclinic@gmail.com">
                  dr.dhanshreedentalclinic@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p>
                <span>Website: </span>
                <a
                  href="https://www.dhanshreedentalclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.dhanshreedentalclinic.com
                </a>
              </p>
            </div>
          </div>
        </div>

       {/* Map + Form */}
<div className="contact-grid">
  {/* Form comes first now */}
  <div className="contact-form-box">
    <h3>Get in Touch</h3>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Phone</label>
      <input
        type="text"
        name="phone"
        placeholder="Mobile number"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <label>Service</label>
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
      >
        <option value="general">General Check-up</option>
        <option value="whitening">Teeth Whitening</option>
        <option value="braces">Braces Consultation</option>
        <option value="implants">Dental Implants</option>
        <option value="other">Other</option>
      </select>

      <label>Message</label>
      <textarea
        name="message"
        rows={4}
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send via WhatsApp</button>
    </form>
  </div>

  {/* Map now comes second */}
  <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.171178219932!2d73.9285482!3d18.6033058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a86d8f74af%3A0x6a9c3fab4620f1c3!2sDr.%20DHANSHREE'S%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1720606359574!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Clinic Location"
    ></iframe>
  </div>
</div>      </section>
    </div>
  );
}
