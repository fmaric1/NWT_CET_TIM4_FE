import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="homepage">
            <section className="welcome">
                <h1>Welcome to Our Dental Clinic</h1>
                <p>At our dental clinic, we provide comprehensive dental care to help you achieve a healthy and beautiful smile.</p>
            </section>

            <section id="services" className="services">
                <h2>Our Services</h2>
                <div className="services-container">
                    <div className="service-item">
                        <h3>General Dentistry</h3>
                        <p>We offer routine check-ups, cleanings, and other general dental care services.</p>
                    </div>
                    <div className="service-item">
                        <h3>Cosmetic Dentistry</h3>
                        <p>Enhance the appearance of your smile with our cosmetic dental treatments.</p>
                    </div>
                    <div className="service-item">
                        <h3>Orthodontics</h3>
                        <p>Get straight, beautiful teeth with our orthodontic solutions, including braces and Invisalign.</p>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials">
                <h2>What Our Patients Say</h2>
                <div className="testimonials-container">
                    <div className="testimonial-item">
                        <p>"The best dental care I have ever experienced! Professional, courteous, and friendly staff made me feel like family."</p>
                        <p>- John Doe</p>
                    </div>
                    <div className="testimonial-item">
                        <p>"I've never felt so comfortable at the dentist's office. They truly care about their patients."</p>
                        <p>- Jane Smith</p>
                    </div>
                    <div className="testimonial-item">
                        <p>"High quality service, very professional and extremely friendly. I highly recommend this clinic."</p>
                        <p>- Michael Brown</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p>For appointments and inquiries, please contact us:</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> info@dentalclinic.com</p>
                    <p><strong>Address:</strong> 123 Dental Street, Tooth City</p>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Dental Clinic. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
