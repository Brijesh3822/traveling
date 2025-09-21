import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const hotelData = [
  { id: 1, name: "Maple Hermitage", city: "chennai", cityId: 1, amenities: "Hover here", cost: 6000, ratings: 3 },
  { id: 2, name: "Trident", city: "ladakh", cityId: 2, amenities: "Pool & Breakfast", cost: 7000, ratings: 4 },
  { id: 3, name: "JW Marriott", city: "Manali", cityId: 3, amenities: "Pool & Breakfast", cost: 7000, ratings: 4 },
  { id: 4, name: "The Taj", city: "Mumbai", cityId: 4, amenities: "Pool & Breakfast", cost: 9000, ratings: 5 },
  { id: 5, name: "The Leela Palace", city: "Pune", cityId: 5, amenities: "Pool & Breakfast", cost: 8000, ratings: 5 },
  { id: 6, name: "Ritz Carlton", city: "Rajasthan", cityId: 6, amenities: "Pool & Breakfast", cost: 8000, ratings: 5 },
  { id: 7, name: "Kohinoor", city: "Goa", cityId: 7, amenities: "Pool & Breakfast", cost: 5000, ratings: 5 },
  { id: 8, name: "Taj Exotica", city: "Kerala", cityId: 8, amenities: "Pool & Breakfast", cost: 7000, ratings: 5 },

  { id: 9, name: "Tunga International", city: "Sikkim", cityId: 9, amenities: "Pool & Breakfast", cost: 7000, ratings: 5 },
];

function HotelList() {
  const { city } = useParams();
  const [selectedCost, setSelectedCost] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  const navigate = useNavigate();

  const filtered = hotelData.filter(hotel => {
    const matchCity = hotel.city.toLowerCase() === city.toLowerCase();
    const matchCost = selectedCost === "All" || hotel.cost <= parseInt(selectedCost);
    const matchRating = selectedRating === "All" || hotel.ratings === parseInt(selectedRating);
    return matchCity && matchCost && matchRating;
  });

  return (
    <>
        <div className="py-2 ps-10 shadow-md bg-white  sticky top-0 z-50 ">
  <div className="text-[30px] text-pink-500 font-[700] cursor-pointer">
    WayferTravels
  </div>
</div>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
      
      <div className="w-full max-w-5xl p-4">
        <div className="bg-white border border-pink-300 rounded-lg shadow-md p-6">
          <p className="text-sm text-pink-600 mb-2">Hotels in {city.charAt(0).toUpperCase() + city.slice(1)}</p>
          <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Hotels in {city.charAt(0).toUpperCase() + city.slice(1)}</h2>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <label className="text-sm font-medium">Cost:</label>
            <select
              className="border px-3 py-1 rounded"
              value={selectedCost}
              onChange={(e) => setSelectedCost(e.target.value)}
            >
              <option value="All">All</option>
              <option value="5000">Below ₹5000</option>
              <option value="6000">Below ₹6000</option>
              <option value="7000">Below ₹7000</option>
            </select>

            <label className="text-sm font-medium">Ratings:</label>
            <select
              className="border px-3 py-1 rounded"
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option value="All">All</option>
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
            </select>

            <button
              className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 text-sm"
              onClick={() => {}} // Filters apply automatically
            >
              Apply Filters
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border">
              <thead>
                <tr className="bg-pink-500 text-white">
                  <th className="p-2 border">Hotel ID</th>
                  <th className="p-2 border">Hotel Name</th>
                  <th className="p-2 border">City ID</th>
                  <th className="p-2 border">Amenities</th>
                  <th className="p-2 border">Cost</th>
                  <th className="p-2 border">Ratings</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length ? (
                  filtered.map(hotel => (
                    <tr key={hotel.id} className="hover:bg-pink-50">
                      <td className="border p-2">{hotel.id}</td>
                      <td className="border p-2">{hotel.name}</td>
                      <td className="border p-2">{hotel.cityId}</td>
                      <td className="border p-2">Hover here</td>
                      <td className="border p-2">₹{hotel.cost.toFixed(2)}</td>
                      <td className="border p-2">{hotel.ratings}</td>
                      <td className="border p-2">
                        <button onClick={() => navigate(`/booking/${hotel.id}`)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-4 text-gray-500">
                      No hotels found for {city}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-pink-500 text-sm py-6 text-center w-full border-t mt-8">
        © 2024 WayferTravels. All rights reserved.
      </footer>
    </div>
    </>
  );
}

export default HotelList;
