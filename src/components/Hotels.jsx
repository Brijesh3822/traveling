import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const travelData = [
  { id: 1, city: "Chennai", region: "South", season: "Winter", days: 3, cost: 30000 },
  { id: 2, city: "Ladakh", region: "North", season: "Summer", days: 7, cost: 50000 },
  { id: 3, city: "Manali", region: "North", season: "Monsoon", days: 5, cost: 35000 },
  { id: 4, city: "Mumbai", region: "West", season: "Winter", days: 3, cost: 15000 },
  { id: 5, city: "Pune", region: "West", season: "Winter", days: 3, cost: 15000 },
  { id: 6, city: "Rajasthan", region: "North-West", season: "Winter", days: 7, cost: 40000 },
  { id: 7, city: "Goa", region: "West", season: "Summer", days: 3, cost: 15000 },
  { id: 8, city: "Kerala", region: "South", season: "Monsoon", days: 5, cost: 21000 },
  { id: 9, city: "Sikkim", region: "North-East", season: "Winter", days: 7, cost: 55000 },
];

function Hotels() {
  const [region, setRegion] = useState("");
  const [season, setSeason] = useState("");
  const [days, setDays] = useState("");
   const navigate = useNavigate();

  const handleFilter = () => {
    return travelData.filter((item) => {
      return (
        (region ? item.region === region : true) &&
        (season ? item.season === season : true) &&
        (days ? item.days === parseInt(days) : true)
      );
    });
  };

  const filteredData = handleFilter();

  return (
    
    <>
    <div className="py-2 ps-10 shadow-md bg-white  sticky top-0 z-50 ">
  <div className="text-[30px] text-pink-500 font-[700] cursor-pointer">
    WayferTravels
  </div>
  </div>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">Travel Packages</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4 items-center">
        <select
          className="border border-pink-300 rounded px-2 py-1"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Region ▾</option>
          <option>South</option>
          <option>North</option>
          <option>West</option>
          <option>North-West</option>
          <option>North-East</option>
        </select>

        <select
          className="border border-pink-300 rounded px-2 py-1"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option value="">Season ▾</option>
          <option>Winter</option>
          <option>Summer</option>
          <option>Monsoon</option>
        </select>

        <select
          className="border border-pink-300 rounded px-2 py-1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        >
          <option value="">Days ▾</option>
          {[...new Set(travelData.map((item) => item.days))].map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <button
          className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 transition"
          onClick={() => {}}
        >
          Apply
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full border border-pink-300 text-sm md:text-base">
          <thead className="bg-pink-50 border-b border-pink-300">
            <tr className="text-pink-500 font-semibold text-center">
              <th className="px-3 py-2 border border-pink-300">City ID</th>
              <th className="px-3 py-2 border border-pink-300">City</th>
              <th className="px-3 py-2 border border-pink-300">Region</th>
              <th className="px-3 py-2 border border-pink-300">Season</th>
              <th className="px-3 py-2 border border-pink-300">Days</th>
              <th className="px-3 py-2 border border-pink-300">Cost</th>
              <th className="px-3 py-2 border border-pink-300">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-pink-50">
                <td className="px-2 py-1 border border-pink-300">{item.id}</td>
                <td className="px-2 py-1 border border-pink-300">{item.city}</td>
                <td className="px-2 py-1 border border-pink-300">{item.region}</td>
                <td className="px-2 py-1 border border-pink-300">{item.season}</td>
                <td className="px-2 py-1 border border-pink-300">{item.days}</td>
                <td className="px-2 py-1 border border-pink-300">Rs {item.cost}</td>
                <td  onClick={() => navigate(`/hotels/${item.id}`)} className="px-2 py-1 border border-pink-300 text-blue-600 underline cursor-pointer">
                  View Journey
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-6 text-sm text-gray-500">
        © 2025 WayferTravels. All rights reserved.
      </footer>
    </div>
    </>
  );
}

export default Hotels;
