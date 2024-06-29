import React, { useState } from 'react';
import NavBar from "../components/navbar";
import './contact_page.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Form data:', formData);
  };

  return (
    <>
      <NavBar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
              />
            </label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
