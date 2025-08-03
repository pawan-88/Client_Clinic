import React from 'react';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          {/* Clinic Info */}
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Dr. Dhanshree's Dental Clinic</h2>
              <p>Providing personalized dental care with the latest technology and a compassionate approach. Your smile, our priority!</p>
            </div>
            <ul className="ftco-footer-social list-unstyled">
              <li><a href="https://facebook.com"><span className="icon-facebook" /></a></li>
              <li><a href="https://instagram.com"><span className="icon-instagram" /></a></li>
              <li><a href="https://wa.me/918275172931"><span className="icon-whatsapp" /></a></li>
            </ul>
          </div>
          

          {/* Dental Tips */}
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Dental Care Tips</h2>

              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{ backgroundImage: `url('/images/Case1.jpg')` }}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Daily Brushing Tips</a></h3>
                  <div className="meta">
                    {/* <div><span className="icon-calendar" /> July 15, 2025</div> */}
                    <div><span className="icon-person" /> Dr. Dhanshree Ghuge(Sanap)</div>
                  </div>
                </div>
              </div>

              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{ backgroundImage: `url('/images/Case2.jpg')` }}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Why Regular Checkups Matter</a></h3>
                  <div className="meta">
                    {/* <div><span className="icon-calendar" /> June 10, 2025</div> */}
                    <div><span className="icon-person" /> Dr. Dhanshree Ghuge(Sanap)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contact Us</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker" /><span className="text">Shop No. 2,  Muktai Plaza, Wadgaon Shinde Road,<br />
                  Opp. Eastern Royale Society, Pathare Wasti,<br />
                  Lohegaon, Pune, Maharashtra 411047</span></li>
                  <li><a href="tel:+918275172931"><span className="icon icon-phone" /><span className="text">+91 82751 72931</span></a></li>
                  <li><a href="mailto:dr.dhanshreedentalclinic@gmail.com"><span className="icon icon-envelope" /><span className="text">dr.dhanshreedentalclinic@gmail.com</span></a></li>
                  <li><a
                  href="https://www.dhanshreedentalclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.dhanshreedentalclinic.com
                </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>© 2025 Dr. Dhanshree's Dental Clinic. All Rights Reserved | <a href="/privacy-policy">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
