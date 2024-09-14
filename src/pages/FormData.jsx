import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use axios or fetch API

const FormData = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  // Fetch all form data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact/all'); // Update this URL to match your backend route
        setContacts(response.data.contacts);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8 mt-32">
      <h2 className="text-2xl font-bold mb-6">Submitted Contact Data</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <div 
              key={contact._id} 
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105"
            >
              <h3 className="text-lg font-bold mb-2">{contact.name}</h3>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> {contact.email}</p>
              <p className="text-gray-600 mb-2"><strong>Subject:</strong> {contact.subject}</p>
              <p className="text-gray-600"><strong>Message:</strong> {contact.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default FormData;
