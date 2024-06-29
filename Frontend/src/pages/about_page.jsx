import React from 'react';
import NavBar from '../components/navbar';
import './about_Page.css'; 
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className="about-container">
                <section className="about-section">
                    <div className="image-container">
                        <img src={image1}/>
                    </div>
                    <div className="text-container">
                        <h2>About Our Service</h2>
                        <p>
                            We provide an easy way to locate e-waste recycling facilities near you. Our service aims to
                            reduce the environmental impact of electronic waste by connecting you with certified recyclers.
                        </p>
                    </div>
                </section>
                <section className="about-section">
                    <div className="text-container">
                        <h2>Why Recycle E-Waste?</h2>
                        <p>
                            Recycling e-waste helps in recovering valuable materials, reduces the demand for new resources,
                            and prevents harmful substances from polluting the environment. Learn more about the benefits
                            of e-waste recycling.
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={image2}/>
                    </div>
                </section>
                <section className="about-section">
                    <div className="image-container">
                        <img src={image3}/>
                    </div>
                    <div className="text-container">
                        <h2>Get Started</h2>
                        <p>
                            Find a recycling facility near you and start making a difference today. Enter your location
                            to get a list of nearby e-waste recyclers, their contact details, and operating hours.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutPage;
