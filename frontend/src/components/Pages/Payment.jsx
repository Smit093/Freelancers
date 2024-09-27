import React, { useState } from 'react';
import axios from 'axios';

// Function to validate the card number using the Luhn Algorithm
const validateCardNumber = (number) => {
  let nCheck = 0, nDigit = 0, bEven = false;
  number = number.replace(/\D/g, "");

  for (let n = number.length - 1; n >= 0; n--) {
    let cDigit = number.charAt(n),
        nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
};

const validateExpiryDate = (date) => {
  const [month, year] = date.split('/');
  if (!month || !year) return false;

  const now = new Date();
  const inputDate = new Date(`20${year}`, month - 1);

  return inputDate > now;
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    // Card Number validation
    if (formData.cardNumber && !validateCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    }

    // Expiry Date validation
    if (formData.expiryDate && !validateExpiryDate(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date is invalid or expired';
    }

    // CVV validation (3 or 4 digits)
    if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }

    // UPI ID validation (format: user@bank)
    if (formData.upiId && !/^[\w.-]+@[\w.-]+$/.test(formData.upiId)) {
      newErrors.upiId = 'Invalid UPI ID format';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios.post('http://localhost:8000/api/contact/', formData)
        .then((response) => {
          alert("Message sent successfully");
          setFormData({
            name: '',
            email: '',
            message: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            upiId: ''
          });
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Card Number Field */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
          </div>

          {/* Expiry Date Field */}
          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.expiryDate}
              onChange={handleChange}
            />
            {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
          </div>

          {/* CVV Field */}
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
          </div>

          {/* UPI ID Field */}
          <div className="mb-4">
            <label htmlFor="upiId" className="block text-gray-700 text-sm font-bold mb-2">
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              placeholder="yourname@bank"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.upiId}
              onChange={handleChange}
            />
            {errors.upiId && <p className="text-red-500 text-xs mt-1">{errors.upiId}</p>}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
