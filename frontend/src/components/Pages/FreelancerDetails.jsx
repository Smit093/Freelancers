import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

const FreelancersDetails = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { email } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}FreelancerProfile`);
                if (!response.ok) {
                    throw new Error('Network response was not okay!');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // All hooks must be called before any return statement
    const freelancer = data.find((freelancer) => freelancer.email === email);

    if (loading) {
        return <div className="flex items-center justify-center h-screen"><div className="loader">Loading...</div></div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">Error fetching data: {error}</div>;
    }

    if (!freelancer) {
        return <div className="text-center">Freelancer not found.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="relative">
                <img
                    src={freelancer.display_image || 'default-cover.jpg'}
                    alt={`${freelancer.first_name} ${freelancer.last_name}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <img
                    src={freelancer.profile_pic || 'default-profile.jpg'}
                    alt={`${freelancer.first_name} ${freelancer.last_name}`}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 border-4 border-white rounded-full"
                />
            </div>
            <h1 className="mt-20 text-2xl font-semibold text-center">{`${freelancer.first_name} ${freelancer.last_name}`}</h1>
            <div className="mt-4 text-center text-gray-600">
                <p><strong>Job Title:</strong> {freelancer.job_title}</p>
                <p><strong>Email:</strong> {freelancer.email}</p>
                <p><strong>Phone:</strong> {freelancer.phone}</p>
            </div>
            <div className="mt-6 px-4">
                <h2 className="text-lg font-semibold">Personal Description</h2>
                <p>{freelancer.personal_description || 'No description available'}</p>

                <h2 className="text-lg font-semibold mt-4">Professional Description</h2>
                <p>{freelancer.professional_description || 'No description available'}</p>

                <h2 className="text-lg font-semibold mt-4">Experience</h2>
                <p>{freelancer.experience} years</p>

                <h2 className="text-lg font-semibold mt-4">Skills</h2>
                <p>{Array.isArray(freelancer.skills) ? freelancer.skills.join(', ') : freelancer.skills || 'No skills listed'}</p>

                <h2 className="text-lg font-semibold mt-4">Company</h2>
                <p>{freelancer.company}</p>

                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div className="mt-6 px-4">
                        <h2 className="text-lg font-semibold mt-4">Pricing</h2>
                        <p><strong>Basic Price:</strong> ₹{freelancer.basic_price}</p>
                        <Link
                            to={`/payment/${freelancer.basic_price}?email=${freelancer.email}`}
                            className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
                        >
                            Apply
                        </Link>
                        <p><strong>Standard Price:</strong> ₹{freelancer.standard_price}</p>
                        <Link
                            to={`/payment/${freelancer.standard_price}?email=${freelancer.email}`}
                            className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
                        >
                            Apply
                        </Link>
                        <p><strong>Premium Price:</strong> ₹{freelancer.premium_price}</p>
                        <Link
                            to={`/payment/${freelancer.premium_price}?email=${freelancer.email}`}
                            className="inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
                        >
                            Apply
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreelancersDetails;
