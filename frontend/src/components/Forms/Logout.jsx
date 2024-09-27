import React, { useContext, useState } from 'react';
import LoginContext from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
  let { setLoggedin } = useContext(LoginContext)
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    setLoggedin(false);
    setSuccess('Log out successful! Redirecting to the Home page.');
    setTimeout(() => navigate('/'), 1300);
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log("User canceled");
    setTimeout(() => navigate('/'), 200);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6">
        <h2 className="text-xl font-semibold">Are you sure you want to log out?</h2>
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{success}</span>
          </div>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
