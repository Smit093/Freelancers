import React, { useContext, useEffect, useState } from 'react';
import LoginContext from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'

const ClientLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const { setLoggedin } = useContext(LoginContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  let {setUser} = useContext(UserContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}Clients`);
        if (!response.ok) {
          throw new Error("Network response was not okay!");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching the data:", error);
        setError("Error fetching the data.");
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidUser = data.some(user => user.email === email && user.password === password);
    if (isValidUser) {
      console.log("Account verified successfully!");
      setLoggedin(true);
      setUser('client')
      setEmail('');
      setPassword('');
      setSuccess("Login successful! Redirecting to the home page.");
      setError('')
      setTimeout(() => navigate('/'), 1300);
    } else {
      console.log("Account verification failed!");
      setSuccess('')
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ClientLoginForm;
