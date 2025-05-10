import React from 'react';
import '../website/aboutus.css'; 
import Navbar from '../../components/website/navbar';

// Using your provided images for the "About Us" page
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <section className="about-header">
          <h1 className="fade-in">About Us</h1>
          <p className="fade-in">Your Health, Our Priority</p>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2 className="slide-in">Welcome to MEDCARE</h2>
            <p className="fade-in">
              Our website connects patients with the best doctors in their area. 
              Whether you need a specialist, a general practitioner, or a specific medical service, we ensure 
              that you find the right doctor for your needs. 
              Simply select your location and the type of care you need, and we'll provide you with the best available doctors in your area.
            </p>
            <button className="btn-primary">Book Your Appointment</button>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Doctor"
              className="zoom-in"
            />
          </div>
        </section>

        <section className="how-it-works">
          <h2 className="slide-in">How It Works</h2>
          <p className="fade-in">
            We simplify the process of finding the right doctor. Our platform allows you to choose a doctor based on:
          </p>
          <div className="how-it-works-steps">
            <div className="step">
              <h3>1. Choose Your Area</h3>
              <p>Enter your location to find doctors near you.</p>
            </div>
            <div className="step">
              <h3>2. Select Your Needs</h3>
              <p>Specify your medical needs (e.g., general consultation, specialist care, etc.).</p>
            </div>
            <div className="step">
              <h3>3. Book Your Appointment</h3>
              <p>Choose the best doctor and book an appointment directly through our platform.</p>
            </div>
          </div>
        </section>

        <section className="about-image-2">
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Clinic"
            className="zoom-in"
          />
        </section>

        <section className="about-footer">
          <h2 className="fade-in">Why Choose Us?</h2>
          <p className="fade-in">
            With a diverse network of highly qualified doctors and an easy-to-use interface, 
            we provide a seamless experience for patients to find medical help they can trust.
          </p>
          <button className="btn-primary">Learn More</button>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
