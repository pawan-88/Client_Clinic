import { Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/About.css";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="slider-item bread-item"
        style={{
          backgroundImage: "url('/images/page.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay1"></div>
        <div className="container">
          <div className="row slider-text1 align-items-end">
            <div className="col-md-7 col-sm-12 ftco-animate mb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home</a>
                </span>{" "}
                <span>About</span>
              </p>
              <h1 className="mb-3">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="ftco-section about-section">
        <div className="container">
          <div className="row d-flex align-items-stretch">
            {/* Doctor Image */}
            <div
              className="col-md-6 ftco-animate about-image"
              style={{
                backgroundImage: "url('/images/Dr_Img.jpg')",
              }}
            >
              <div className="doctor-overlay">
                <h3>Dr. Dhanshree Ghuge (Sanap)</h3>
                <p className="doctor-title">Founder &amp; Chief Dentist</p>
              </div>
            </div>

            {/* Tabs Section */}
           <div className="col-md-6 ftco-animate pr-md-5 tab-section">
  <Tab.Container id="about-tabs" defaultActiveKey="whatwedo">
    <div>
      {/* Nav Pills */}
     <Nav variant="pills" className="mb-4 justify-content-start">
  <Nav.Item>
    <Nav.Link eventKey="whatwedo">
      What We Do
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="mission">
      Our Mission
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="goal">
      Our Goal
    </Nav.Link>
  </Nav.Item>
</Nav>


      {/* Tab Content */}
      <Tab.Content>
        <Tab.Pane eventKey="whatwedo">
          <h2 className="mb-4">Expert Dental Care for a Healthy Smile</h2>
          <p>
            At <strong>Dr. Dhanshree's Dental Clinic</strong>, we provide <strong>top-notch dental care</strong> with advanced treatments. Our expert team specializes in <strong>cleaning, root canals, implants, whitening, and cosmetic dentistry</strong>.
          </p>
          <p>
            We use the latest technology and <strong>pain-free dentistry techniques</strong> to ensure comfort. Whether it's <strong>emergency care</strong> or a routine check-up, we are here to help!
          </p>
          <p>
            Visit our clinic in <strong>Lohegaon, Pune,</strong> for personalized dental solutions. <strong>Book your appointment today!</strong>
          </p>
        </Tab.Pane>

        <Tab.Pane eventKey="mission">
          <h2 className="mb-4">Providing Affordable & Quality Dental Care</h2>
          <p>
            Our mission at <strong>Dr. Dhanshree's Dental Clinic</strong> is to make <strong>high-quality dental care accessible to everyone.</strong> We focus on <strong>preventive dentistry</strong> to help our patients maintain a <strong>healthy and confident smile.</strong>
          </p>
          <p>
            We are committed to using <strong>state-of-the-art dental technology</strong> and the best practices to provide <strong>painless dental treatments.</strong> Our team of <strong>experienced dentists</strong> ensures personalized care for every patient.
          </p>
          <p>
            Looking for <strong>the best dentist in Lohegaon, Pune?</strong> Visit us for <strong>affordable dental solutions</strong> that fit your needs.
          </p>
        </Tab.Pane>

        <Tab.Pane eventKey="goal">
          <h2 className="mb-4">Your Smile, Our Priority</h2>
          <p>
            Our goal is to help patients achieve <strong>optimal oral health</strong> with <strong>modern, comfortable, and effective dental treatments.</strong> We strive to be the <strong>best dental clinic in Pune</strong> by offering <strong>comprehensive dental services</strong> for all ages.
          </p>
          <p>
            From <strong>children’s dentistry</strong> to <strong>senior oral care,</strong> we are dedicated to enhancing the <strong>quality of life</strong> of our patients through <strong>exceptional dental solutions.</strong>
          </p>
          <p>
            Let’s work together to create your <strong>perfect smile. Book your consultation today!</strong>
          </p>
        </Tab.Pane>
      </Tab.Content>
    </div>
  </Tab.Container>
</div>

          </div>
        </div>
      </section>
    </>
  );
}
