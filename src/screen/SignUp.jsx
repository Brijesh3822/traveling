import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.username) newErrors.username = "Username is required";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {
    // No errors, save data to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if email already exists
    const userExists = existingUsers.some(user => user.email === formData.email);
    if (userExists) {
      setErrors({ email: "Email already registered" });
      return;
    }

    // Save new user
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redirect to login page
    navigate("/login");
  } else {
    setErrors(validationErrors);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-yellow-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-[30px] shadow-xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left - Login */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-400 to-purple-500 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <p className="mb-6 text-center">Login here if you already have an account</p>
          <button
            onClick={() => navigate("/login")}
            className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition cursor-pointer"
          >
            LOGIN
          </button>
        </div>

        {/* Right - Sign Up */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <button className="border border-blue-500 text-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 hover:bg-blue-500 hover:text-white transition">
            G
          </button>
          <p className="mb-4 text-sm text-gray-500">Or use your Email for registration</p>

          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 mb-2 text-sm">{errors.email}</p>}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mb-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
            {errors.username && <p className="text-red-500 mb-2 text-sm">{errors.username}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mb-1 p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 mb-2 text-sm">{errors.password}</p>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mb-3 p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mb-2 text-sm">{errors.confirmPassword}</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition w-full cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
