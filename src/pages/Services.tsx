import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Service.css';
import serviceData from '../data/serviceData';

const Service: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsApp = () => {
    const { name, email, phone, treatment, message } = formData;
    const text = `*New Dental Quotation Request*\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}\n🦷 *Treatment Type:* ${treatment}\n📝 *Details:* ${message}`;
    const whatsappURL = `https://wa.me/918275172931?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="slider-item bread-item"
        style={{
          backgroundImage: "url('/images/image.png')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="overlay1"></div>
        <div className="container">
          <div className="row slider-text1 align-items-end">
            <div className="col-md-7 col-sm-12 ftco-animate mb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">Home</Link>
                </span>{' '}
                <span>Services</span>
              </p>
              <h1 className="mb-3">Our Services</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center mb-2 services-heading">
          Our Dental Services - Expert, Affordable Care for Bright Smiles
        </h2>
        <p className="text-center mb-4 services-subtext">
          We offer professional and affordable dental treatments at Dr.Dhanshree's Dental Clinic to keep your smile healthy and beautiful.
        </p>

        <div className="row">
          {serviceData.map((service, index) => (
            <div className="col-md-2 col-sm-4 col-6 mb-4" key={index}>
              <div className="card shadow-sm w-100 h-100 d-flex flex-column">
                <img
                  src={service.image}
                  alt={service.alt || service.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.shortDesc}</p>

                  {expandedIndex === index && (
                    <div className="card-text text-muted">
                      {service.fullDesc
                        .split(/<br\s*\/?>/i)
                        .map((line, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: line.trim() }} />
                        ))}
                      {service.cta && (
                        <p className="mt-2">
                          📅{' '}
                          <Link to="/contact" className="text-primary fw-semibold">
                            {service.cta}
                          </Link>
                        </p>
                      )}
                    </div>
                  )}

                  <button
                    className="btn btn-link p-0 mt-auto"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? 'Read Less' : 'Read More +'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Form */}
        <div className="bg-light p-5 mt-5 rounded">
          <h3 className="text-center mb-4">Get a Free Dental Quote</h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="treatment"
                    className="form-control"
                    onChange={handleChange}
                  >
                    <option value="">Select Treatment</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Braces & Aligners</option>
                    <option>Teeth Whitening</option>
                    <option>Gum Treatment</option>
                    <option>Wisdom Tooth Extraction</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    className="form-control"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={sendWhatsApp}
                  >
                    Get Free Quote via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
