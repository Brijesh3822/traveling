import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // reset messages
    setError("");
    setSuccess("");

    // simple validation
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    // get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if username/email and password match
    const user = users.find(
      (u) => (u.username === username || u.email === username) && u.password === password
    );

    if (user) {
    //   setSuccess("✅ Login successful!");
      // save logged in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // redirect after 1 second to homepage
      setTimeout(() => {
        navigate("/"); // replace "/" with your dashboard route if needed
      }, 1000);
    } else {
      setError("❌ Invalid username or password");
    }
  };

  const handleRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#fce4ec] p-4">
      <div className="w-full max-w-4xl bg-white rounded-[30px] shadow-xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section (Login) */}
        <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-6">Login</h2>

          {/* Google Button */}
          <button className="border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center mb-6">
            <span className="text-xl font-bold text-gray-700">G</span>
          </button>

          <form onSubmit={handleLogin} className="w-full flex flex-col items-center">
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full max-w-sm mb-4 px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full max-w-sm mb-2 px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <a
              href="#"
              className="text-sm text-gray-600 hover:underline mb-6 self-start max-w-sm"
            >
              Forgot your password?
            </a>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
            )}

            {/* Success Message */}
            {success && (
              <p className="text-green-500 mb-4 text-sm text-center">{success}</p>
            )}

            <button
              type="submit"
              className="py-3 bg-blue-500 text-white rounded-full w-full max-w-sm text-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Right Section (Signup) */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-2">Create an Account!</h2>
          <p className="mb-6">Sign up if you still don't have an account ...</p>
          <button
            onClick={handleRedirect}
            className="px-8 py-3 border-2 border-white rounded-full text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 cursor-pointer"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}




export default Login;
