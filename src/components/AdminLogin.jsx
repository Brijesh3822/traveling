import React from "react";
import { FaUserShield, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
     const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-md shadow-md">
        {/* Back Button */}
        <div className="p-3">
          <button   onClick={() => navigate("/")} className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-800 text-sm cursor-pointer">
            Back to Home
          </button>
        </div>

        {/* Header */}
        <div className="bg-blue-500 text-white text-center font-bold text-lg py-3 rounded-t-md">
          Admin Login
        </div>

        {/* Form */}
        <form className="p-6 space-y-4">
          {/* Username */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaUserShield className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Admin Username"
              className="w-full focus:outline-none text-sm"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none text-sm"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition  cursor-pointer"
          >
            Sign In
          </button>

          {/* Links */}
          <div className="flex justify-between text-sm text-gray-600">
            <a href="#" className="hover:text-blue-500">
              Forgot Password ?
            </a>
            <a href="#" className="hover:text-blue-500">
              Create an Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
