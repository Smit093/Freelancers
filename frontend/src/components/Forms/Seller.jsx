import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../axios/axiosInstance';

const MultiStepForm = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    personal_description: "",
    phone: "",
    email: "",
    profile_pic: "",
    job_title: "",
    experience: "",
    skills: "",
    company: "",
    display_image: "",
    professional_description: "",
    basic_price: "",
    basic_features: [],
    standard_price: "",
    standard_features: [],
    premium_price: "",
    premium_features: []
  });


  const [featureInput, setFeatureInput] = useState("");
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [displayImagePreview, setDisplayImagePreview] = useState(null);

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "profile_pic") {
        setProfilePicPreview(URL.createObjectURL(file));
        setFormData({ ...formData, profile_pic: file });
      } else if (type === "display_image") {
        setDisplayImagePreview(URL.createObjectURL(file));
        setFormData({ ...formData, display_image: file });
      }
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.first_name || !formData.last_name || !formData.email) {
        setError("Please fill out all personal information fields.");
        return;
      }
      setStep(2);
      setProgress(66);
    } else if (step === 2) {
      if (!formData.job_title || !formData.skills) {
        setError("Please fill out all professional information fields.");
        return;
      }
      setStep(3);
      setProgress(100);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setProgress(33);
    } else if (step === 3) {
      setStep(2);
      setProgress(66);
    }
  };

  const handleFeatureAdd = (tier) => {
    if (featureInput) {
      const featuresKey = `${tier}_features`;
      setFormData((prev) => ({
        ...prev,
        [featuresKey]: [...prev[featuresKey], featureInput] // Add feature to the correct tier
      }));
      setFeatureInput(""); // Clear input after adding
    }
  };



  const handleFeatureRemove = (tier, featureToRemove) => {
    const featuresKey = `${tier}_features`;
    setFormData((prev) => ({
      ...prev,
      [featuresKey]: prev[featuresKey].filter(feature => feature !== featureToRemove) // Remove feature
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formDataToSubmit = new FormData();

    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach(feature => {
          formDataToSubmit.append(`${key}[]`, feature);
        });
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    }

    if (formData.profile_pic) {
      formDataToSubmit.append('profile_pic', formData.profile_pic);
    }
    if (formData.display_image) {
      formDataToSubmit.append('display_image', formData.display_image);
    }

    try {
      await axiosInstance.post('FreelancerProfile/', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Successful! Redirecting to the Home page.');
      setTimeout(() => navigate('/'), 1300);
    } catch (error) {
      setError('Error during sign up. Please try again.');
    }

  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Steps Indicator */}
        <div className="flex space-x-4 mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full ${step >= stepNumber ? "bg-green-500" : "bg-gray-300"} text-white flex items-center justify-center font-bold`}>
                {stepNumber}
              </div>
              <span className={`ml-2 text-sm font-semibold ${step >= stepNumber ? "text-gray-700" : "text-gray-400"}`}>
                {stepNumber === 1 ? 'Personal Info' : stepNumber === 2 ? 'Professional Info' : 'Submit'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-700 mb-4">Personal Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["first_name", "last_name", "phone", "email"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Personal Description</label>
                  <textarea
                    name="personal_description"
                    value={formData.personal_description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Tell us about yourself"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, "profile_pic")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />

                {profilePicPreview && (
                  <img src={profilePicPreview} alt="Profile Preview" className="mt-4 w-24 h-24 rounded-full" />
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-700 mb-4">Professional Info</h2>
              <div className="grid grid-cols-1 gap-6">
                {["job_title", "experience", "skills", "company"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Professional Description</label>
                  <textarea
                    name="professional_description"
                    value={formData.professional_description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Describe your professional background"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Display Image</label>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, "display_image")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />

                {displayImagePreview && (
                  <img src={displayImagePreview} alt="Display Preview" className="mt-4 w-full rounded-md" />
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-700 mb-4">Pricing Plans</h2>
              <div className="grid grid-cols-1 gap-6">
                {["basic", "standard", "premium"].map((tier) => (
                  <div key={tier} className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 capitalize">{tier} Plan</h3>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Price</label>
                      <input
                        type="text"
                        value={formData[`${tier}_price`]}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [`${tier}_price`]: e.target.value
                          }))
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder={`Enter ${tier} plan price`}
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Features</label>
                      <div className="flex space-x-4">
                        <input
                          type="text"
                          value={featureInput}
                          onChange={(e) => setFeatureInput(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                          placeholder="Add feature"
                        />
                        <button
                          type="button"
                          onClick={() => handleFeatureAdd(tier)} // Add feature on button click
                          className="px-6 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none"
                        >
                          Add
                        </button>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {formData[`${tier}_features`].map((feature, index) => (
                          <li key={index} className="flex justify-between items-center">
                            <span>{feature}</span>
                            <button
                              type="button"
                              onClick={() => handleFeatureRemove(tier, feature)} // Remove feature on button click
                              className="text-red-500 text-sm focus:outline-none"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}


              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>

        {error && (
          <div className="mt-6 bg-red-100 p-4 rounded-md text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-6 bg-green-100 p-4 rounded-md text-green-700">
            {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
