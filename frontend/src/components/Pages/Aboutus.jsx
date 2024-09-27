import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
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
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold text-gray-900">Smit Patel</h3>
            <p className="text-gray-600">Web Developer</p>
            <p className="text-sm text-gray-500 mt-2">
              Specializes in building modern, responsive websites using the latest technologies.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold text-gray-900">Pravin Mudaliyar</h3>
            <p className="text-gray-600">Graphic Designer</p>
            <p className="text-sm text-gray-500 mt-2">
              Expert in creating visually appealing designs that resonate with your brand's identity.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-gray-900">Vatsal Yadav</h3>
            <p className="text-gray-600">Content Writer</p>
            <p className="text-sm text-gray-500 mt-2">
              Delivers engaging and optimized content that speaks to your audience and drives results.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Ramesh Kerai</h3>
            <p className="text-gray-600">SEO Specialist</p>
            <p className="text-sm text-gray-500 mt-2">
              Focuses on optimizing websites to rank higher in search engines and reach a broader audience.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
