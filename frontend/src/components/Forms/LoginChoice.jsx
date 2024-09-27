import React from 'react'
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

export default function LoginChoice() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Choose Your Role</h1>
    <div className="flex space-x-4">
      <Link
        to="/client-login-form" // Change this to your actual route
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Continue as Client
      </Link>
      <Link
        to="/freelancer-login-form" // Change this to your actual route
        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
      >
        Continue as Freelancer
      </Link>
    </div>
  </div>
  )
}
