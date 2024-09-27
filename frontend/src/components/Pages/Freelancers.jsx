import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginContext from '../../contexts/LoginContext';

export default function Freelancers() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);     // Add error state
    const { loggedin } = useContext(LoginContext);
    const navigate = useNavigate();

    // Fetch freelancers data
    useEffect(() => {
        const fetchFreelancersData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}FreelancerProfile`);
                if (!response.ok) throw new Error('Failed to fetch freelancers data');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFreelancersData();
    }, []);

    // Fetch categories data
    useEffect(() => {
        const fetchCategoriesData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/Freelancers');
                if (!response.ok) throw new Error('Failed to fetch profile data');
                const profileData = await response.json();
                const uniqueCategories = [...new Set(profileData.map(freelancer => freelancer.category))];
                setCategories(uniqueCategories);
                console.log(uniqueCategories)
            } catch (err) {
                setError(err.message);
            }
        };
        fetchCategoriesData();
    }, []);

    // Redirect to login if not logged in
    useEffect(() => {
        if (!loggedin) {
            navigate('/loginchoice');
        }
    }, [loggedin, navigate]);



    // Experience levels
    const experienceLevels = Array.from({ length: 11 }, (_, i) => i);

    // List of skills
    const skillsList = ['Python', 'Django', 'JavaScript', 'React', 'Node.js'];

    // Handle skill checkbox changes
    const handleSkillChange = (skill) => {
        setSelectedSkills((prevSelectedSkills) =>
            prevSelectedSkills.includes(skill)
                ? prevSelectedSkills.filter((s) => s !== skill)
                : [...prevSelectedSkills, skill]
        );
    };

    // Filter freelancers based on selected criteria
    const filteredData = data.filter((freelancer) => {
        const matchesSearchTerm = freelancer.job_title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesExperience = selectedExperience ? freelancer.experience === parseInt(selectedExperience) : true;
        const matchesMinPrice = minPrice ? freelancer.basic_price >= parseFloat(minPrice) : true;
        const matchesMaxPrice = maxPrice ? freelancer.basic_price <= parseFloat(maxPrice) : true;

        const freelancerSkills = freelancer.skills ? freelancer.skills.split(',').map(skill => skill.trim()) : [];
        const matchesSkills = selectedSkills.length > 0
            ? selectedSkills.every(skill => freelancerSkills.includes(skill))
            : true;

        const matchesCategory = selectedCategory ? freelancer.category === selectedCategory : true;
        return matchesSearchTerm && matchesCategory && matchesExperience && matchesMinPrice && matchesMaxPrice && matchesSkills;
    });

    // Show loading or error messages
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // If not logged in, return null
    if (!loggedin) return null;

    return (
        <>
            <div className="bg-white p-8 mt-10">
                <div className="max-w-7xl mx-auto ml-10">

                    {/* Filters */}
                    <div className="flex flex-wrap mb-6 gap-4">
                        <input
                            type="text"
                            placeholder="Search by job title"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border rounded-lg p-2"
                        />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border rounded-lg p-2"
                        >
                            <option value="">All Categories</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <select
                            value={selectedExperience}
                            onChange={(e) => setSelectedExperience(e.target.value)}
                            className="border rounded-lg p-2"
                        >
                            <option value="">All Experience Levels</option>
                            {experienceLevels.map((level) => (
                                <option key={level} value={level}>{level} years</option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="border rounded-lg p-2"
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="border rounded-lg p-2"
                        />
                    </div>

                    {/* Skills Filter */}
                    <div className="flex mb-4 flex-wrap gap-2">
                        <label className="mr-4">Skills:</label>
                        <div className="flex flex-wrap">
                            {skillsList.map(skill => (
                                <label key={skill} className="flex items-center mr-2">
                                    <input
                                        type="checkbox"
                                        value={skill}
                                        checked={selectedSkills.includes(skill)}
                                        onChange={() => handleSkillChange(skill)}
                                        className="mr-2"
                                    />
                                    {skill}
                                </label>
                            ))}
                        </div>
                    </div>



                    {/* Freelancers List */}
                    <h1 className="text-2xl font-bold text-center my-4">Freelancers List</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {filteredData.map((freelancer) => (
                            <div key={freelancer.email} className="max-w-xs bg-white rounded-lg shadow-md p-4 mx-auto">
                                <Link to={`/freelancers/${freelancer.email}`} className="block">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}