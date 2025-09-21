import React, { useState } from "react";
import { useParams } from "react-router-dom";

function BookingForm() {
  const hotelData = [
    { id: 1, name: "Maple Hermitage", city: "Chennai", cost: 6000 },
    { id: 2, name: "Trident", city: "Ladakh", cost: 7000 },
    { id: 3, name: "JW Marriott", city: "Manali", cost: 7000 },
    { id: 4, name: "The Taj", city: "Mumbai", cost: 9000 },
    { id: 5, name: "The Leela Palace", city: "Pune", cost: 8000 },
    { id: 6, name: "Ritz Carlton", city: "Rajasthan", cost: 8000 },
    { id: 7, name: "Kohinoor", city: "Goa", cost: 5000 },
    { id: 8, name: "Taj Exotica", city: "Kerala", cost: 7000 },
    { id: 9, name: "Tunga International", city: "Sikkim", cost: 7000 },
  ];

  const { id } = useParams();
  const hotel = hotelData.find((h) => h.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    tourists: "",
    dob: "",
    contact: "",
  });

  if (!hotel) {
    return <p className="text-center text-red-500">Hotel not found.</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${hotel.name}! Proceeding to Payment...`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-pink-300 rounded-lg shadow-md p-6">
        {/* Booking Details */}
        <h2 className="text-xl font-bold text-pink-600 text-center mb-4">
          Booking Details
        </h2>
        <p className="text-sm text-gray-600 text-center">
          City Name: <span className="text-pink-600">{hotel.city}</span>
        </p>
        <p className="text-sm text-gray-600 text-center mb-4">
          Hotel Name: <span className="text-pink-600">{hotel.name}</span>
        </p>

        {/* Booking Form */}
        <h3 className="text-lg font-semibold text-pink-600 text-center mb-4">
          Booking Form
        </h3>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-pink-400"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-pink-400"
            required
          />
          <input
            type="number"
            name="tourists"
            placeholder="Number of Tourists"
            value={formData.tourists}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-pink-400"
            required
          />
          <div>
            <label className="text-sm font-medium text-pink-600">
              Date of Birth:
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-pink-400 mt-1"
              required
            />
          </div>
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-pink-400"
            required
          />

          {/* Cost */}
          <p className="text-center font-semibold text-gray-700">
            Cost:{" "}
            <span className="text-pink-600">
              ₹{hotel.cost * (formData.tourists || 1)}
            </span>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition cursor-pointer"
          >
            Proceed for Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
