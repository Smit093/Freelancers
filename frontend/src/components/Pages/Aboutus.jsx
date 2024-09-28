import React from "react";
import smit from '../../assets/Image/smit.jpg'
import vatsal from '../../assets/Image/vatsal.jpg'
import pravin from '../../assets/Image/pravin.jpg'
import ramesh from '../../assets/Image/ramesh.jpg'
const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Us Section */}
        <h1 className="text-5xl font-bold text-green-600 text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          We are a team of passionate freelancers dedicated to delivering high-quality projects across various industries.
          With expertise in web development, graphic design, content creation, and more, we aim to help businesses and individuals
          thrive in the digital world.
        </p>

        {/* Our Team Section */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src={smit}
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold text-gray-900">Smit Patel</h3>
            <p className="text-gray-600">Backend Engineer</p>
            <p className="text-sm text-gray-500 mt-2">
              Expert in server-side logic, API integration, and optimizing backend performance for scalable web applications
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src={pravin}
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold text-gray-900">Pravin Mudaliyar</h3>
            <p className="text-gray-600">Frontend designer</p>
            <p className="text-sm text-gray-500 mt-2">
              Specializes in building modern, responsive websites using the latest technologies.</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src={vatsal}
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-900">Vatsal Yadav</h3>
            <p className="text-gray-600">Backend Engineer</p>
            <p className="text-sm text-gray-500 mt-2">
              Focused on designing and maintaining efficient, secure, and scalable backend systems for seamless data flow            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src={ramesh}
              alt="Team Member 4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Ramesh Kerai</h3>
            <p className="text-gray-600">Frontend Engineer</p>
            <p className="text-sm text-gray-500 mt-2">
              Skilled in crafting dynamic, responsive user interfaces with a focus on performance and user experience            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
