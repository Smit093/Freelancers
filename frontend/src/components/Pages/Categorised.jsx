import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Categorised() {
  const params = useParams();
  let category = params.category.replace(/-/g, ' '); // Format the category
  const [data, setData] = useState([]);

  // Fetch freelancers data
  useEffect(() => {
    const fetchFreelancersData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}FreelancerProfile`);
        if (!response.ok) throw new Error('Failed to fetch freelancers data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchFreelancersData();
  }, []);

  // Filter freelancers based on job title
  const filteredFreelancers = data.filter(freelancer =>
    freelancer.job_title.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-6 mb-4 text-gray-800 underline">
        {category}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFreelancers.map(freelancer => (
          <Link key={freelancer.email} to={`/freelancers/${freelancer.email}`} className="block">
            <img
              src={freelancer.display_image}
              alt={`${freelancer.first_name} ${freelancer.last_name}`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold mt-2">{`${freelancer.first_name} ${freelancer.last_name}`}</h2>
            <p className="text-gray-600">{freelancer.job_title}</p>
            <p className="text-gray-600">{freelancer.category}</p>
            <p className="font-thin">{freelancer.personal_description}</p>
            <p className="font-bold">Price: ${freelancer.basic_price}</p>
            <p className="font-thin">Experience: {freelancer.experience} years</p>
          </Link>
        ))}
      </div>
      {filteredFreelancers.length === 0 && <p>No freelancers found for this category.</p>}
    </div>
  );
}
