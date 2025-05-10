import "../website/home.css";
import Navbar from "../../components/website/navbar";
import image1 from "../../images/doctors.avif";
import { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "../../components/website/footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      text: "The care I received was exceptional. The doctors were professional and made me feel comfortable throughout my treatment. I highly recommend this clinic to anyone seeking quality healthcare.",
      name: "Sarah Ahmed",
      title: "Regular Patient",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      text: "I've been a patient here for years. The staff is always friendly and the medical care is top-notch. The online appointment system makes it so easy to schedule visits.",
      name: "Mohamed Hassan",
      title: "Long-term Patient",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      text: "The pediatric department is amazing! My children actually look forward to their check-ups. The doctors are patient and explain everything in a way that puts both parents and children at ease.",
      name: "Layla Mahmoud",
      title: "Parent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const section = document.querySelector('.home-trust-section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('visible'); // Add visible class when section is in view
            observer.unobserve(section); // Optional: stop observing after first trigger
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) observer.observe(section); // Start observing the section
    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home">
          <div className="text-section">
            <h1 className="home-slogan">Providing The Best Doctors in Your Area</h1>
            <h3 className="home-h3">Your Health And Wellbeing is Important For Us</h3>
            <button>Make An Appointment</button>
          </div>
          <img className="home-img" src={image1} alt="doctors" />
        </div>
      </div>
      <hr className="decorative-line"/>

      {/* Trust Section */}
      <div className="home-trust-section">
        <h2 className="home-question">Why You Should Trust Us?</h2>
        <div className="home-features">
          <div className="home-feature">
            <i className="home-icon fas fa-user-md"></i>
            <p>All Specialists</p>
            <span>We have doctors from every field available and ready to help you.</span>
          </div>
          <div className="home-feature">
            <i className="home-icon fas fa-lock"></i>
            <p>Private and Secure</p>
            <span>Your health data is protected with top-tier security protocols.</span>
          </div>
          <div className="home-feature">
            <i className="home-icon fas fa-clock"></i>
            <p>24/7 Service</p>
            <span>We're available at all times to provide urgent and routine care.</span>
          </div>
        </div>
      </div>

      <hr className="decorative-line"/>

      {/* Testimonials Section */}
      <div className="home-testimonials-section">
        <h2 className="home-question">What Our Patients Say</h2>
        <div className="testimonials-container">
          <div className="testimonials-grid" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
              >
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-title">{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button 
              className="slider-arrow" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button 
              className="slider-arrow" 
              onClick={nextSlide}
              disabled={currentSlide === testimonials.length - 1}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <hr className="decorative-line"/>

      {/* News Section */}
      <div className="home-news-section">
        <h2 className="home-question">Latest Updates</h2>
        <div className="news-grid">
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" alt="Pediatric Department" className="news-image" />
            <div className="news-content">
              <p className="news-date">March 15, 2024</p>
              <h3 className="news-title">New Pediatric Department Opening</h3>
              <p className="news-excerpt">We're excited to announce the opening of our new pediatric department with specialized care for children.</p>
            </div>
          </div>
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop" alt="COVID-19 Vaccination" className="news-image" />
            <div className="news-content">
              <p className="news-date">March 10, 2024</p>
              <h3 className="news-title">COVID-19 Vaccination Update</h3>
              <p className="news-excerpt">Latest information about COVID-19 vaccinations and booster shots availability at our clinic.</p>
            </div>
          </div>
          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" alt="Medical Equipment" className="news-image" />
            <div className="news-content">
              <p className="news-date">March 5, 2024</p>
              <h3 className="news-title">New Medical Equipment</h3>
              <p className="news-excerpt">We've upgraded our diagnostic equipment to provide better and faster results for our patients.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="decorative-line"/>

      {/* Contact Section */}
      <div className="home-contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch With Us</h2>
            <p className="contact-description">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">+20 123 456 7890</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">info@clinic.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">Visit Us</div>
                  <div className="contact-value">123 Medical Street, Cairo, Egypt</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <div className="contact-label">Working Hours</div>
                  <div className="contact-value">Mon - Sat: 8:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.46998136828!2d31.235948!3d30.044419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822a9b3d5f8a1%3A0x1c3a3b0b0b0b0b0b!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1647000000000!5m2!1sen!2seg" 
              allowFullScreen="" 
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
