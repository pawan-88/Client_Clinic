import { motion } from "framer-motion";
import "../css/Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const form = document.querySelector(".appointment-form") as HTMLFormElement;
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("appointment_name") as HTMLInputElement).value.trim();
        const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();

        if (!name || !phone) {
          alert("Please fill in all required fields: Name and Phone.");
          return;
        }

        const whatsappLink = `https://wa.me/918275172931?text=${encodeURIComponent(
          `Hello Dr. Dhanshree's Dental Clinic,%0A%0AI would like to book an appointment.%0A%0AName: ${name}%0APhone: ${phone}`
        )}`;

        window.open(whatsappLink, "_blank");
      });
    }
  }, []);

  return (
    <>
      {/* Instant Appointment Bar */}
      <div className="instant-appointment">
        <div className="inst-app">
          <a href="tel:+918275172931" className="quick-appointment-btn">
            Quick Appointment
          </a>
        </div>
        <ul className="social-icons">
          <li>
            <a
              href="https://www.instagram.com/drdhanshree_dentalclinic2025/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://share.google/UWIVnC067w6uOt1dS"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-location-dot fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Fixed Action Buttons */}
      <div className="action-buttons">
        <a href="tel:+918275172931" className="call-button" title="Call Now">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a
          href="https://wa.me/918275172931?text=Hi%20Dr.%20Dhanshree's%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
          className="whatsapp-button"
          title="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      {/* Hero Section */}
      <section className="home-slider">
        <div
          className="slider-item"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="slider-text">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Welcome to Dr. Dhanshree's Dental Clinic
              </motion.h1>
              <p>Your Smile, Our Passion – Advanced & Affordable Dental Care</p>
              <div className="button-container">
                <a
                  href="https://wa.me/918275172931?text=Hi%20Dr.%20Dhanshree's%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on WhatsApp
                </a>
                <a href="tel:+918275172931" className="btn btn-primary">
                  Call Us: +918275172931
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Info & Appointment Booking Section */}
      <section className="ftco-intro">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3 color-1 p-4">
              <h3 className="mb-4">Contact Details</h3>
              <p>Email: dr.dhanshreedentalclinic@gmail.com</p>
              <span className="phone-number">Mob: +91 82751 72931</span>
            </div>
            <div className="col-md-3 color-2 p-4">
              <h3 className="mb-4">Opening Hours</h3>
              <p className="openinghours d-flex">
                <span>Monday - Sunday </span>
                <span> 10:00 AM - 9:00 PM</span>
              </p>
              <p className="openinghours d-flex">
                <span>Thursday</span>
                <span>12:00 PM - 9:00 PM</span>
              </p> 
            </div>
            <div className="col-md-6 color-3 p-4 ">
              <h3 className="mb-2">Book an Appointment Online</h3>
              <form className="appointment-form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="appointment_name"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Make an Appointment"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
