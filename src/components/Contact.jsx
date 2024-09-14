import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from 'react-modal';
import AOS from 'aos'; // Import AOS if not already done
import 'aos/dist/aos.css'; // Import AOS styles

Modal.setAppElement('#root'); // This is required for screen readers

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:5000/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to send the message');
        }
      })
      .then((data) => {
        setModalContent('Message sent successfully!');
        setModalIsOpen(true);
      })
      .catch((err) => {
        setModalContent('Failed to send the message, please try again.');
        setModalIsOpen(true);
      });
  
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-teal-100 to-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-600 mb-8" data-aos="fade-up">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="200">
          We'd love to hear from you. Please reach out with any questions or feedback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Our Address</h3>
            <p className="text-gray-700 mb-4">GM plaza,phase -7</p>
            <p className="text-gray-700">Industrial Area, Sector 73 ,Mohali</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Call Us</h3>
            <p className="text-gray-700 mb-4">+91-8968881110</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Email Us</h3>
            <p className="text-gray-700">dodunsoftsolutions@gmail.com</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto max-w-lg" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Subject of your message"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Modal for form submission feedback */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Form Submission"
          className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-lg outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">{modalContent}</h2>
          <button
            onClick={closeModal}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            Close
          </button>
        </Modal>
      </div>
    </section>
  );
};

export default Contact;
