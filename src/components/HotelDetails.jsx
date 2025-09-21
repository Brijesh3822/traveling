import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotal01 from "../assets/img01.jpg";
import hotal02 from "../assets/img02.jpg";
import hotal03 from "../assets/img03.jpg";
import hotal04 from "../assets/img04.jpg";
import hotal05 from "../assets/img05.jpg";
import hotal06 from "../assets/img06.jpg";
import hotal07 from "../assets/img07.jpg";
import hotal08 from "../assets/img08.jpg";
import hotal09 from "../assets/img09.jpg";
import Header from "./Header";

// Ideally move this data to a separate file
const travelData = [
 { id: 1, city: "Chennai", region: "South", season: "Winter", days: 3, cost: 30000 , img:hotal01},
  { id: 2, city: "Ladakh", region: "North", season: "Summer", days: 7, cost: 50000,img:hotal02 },
  { id: 3, city: "Manali", region: "North", season: "Monsoon", days: 5, cost: 35000 ,img:hotal03},
  { id: 4, city: "Mumbai", region: "West", season: "Winter", days: 3, cost: 15000 ,img:hotal04},
  { id: 5, city: "Pune", region: "West", season: "Winter", days: 3, cost: 15000 ,img:hotal05},
  { id: 6, city: "Rajasthan", region: "North-West", season: "Winter", days: 7, cost: 40000 ,img:hotal06},
  { id: 7, city: "Goa", region: "West", season: "Summer", days: 3, cost: 15000 ,img:hotal07},
  { id: 8, city: "Kerala", region: "South", season: "Monsoon", days: 5, cost: 21000 ,img:hotal08},
  { id: 9, city: "Sikkim", region: "North-East", season: "Winter", days: 7, cost: 55000 ,img:hotal09},
];

function HotelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = travelData.find((item) => item.id === parseInt(id));

  if (!hotel) {
    return (
      <div className="p-4 text-center min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg">Package not found.</p>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="py-2 ps-10 shadow-md bg-white  sticky top-0 z-50 ">
  <div className="text-[30px] text-pink-500 font-[700] cursor-pointer">
    WayferTravels
  </div>
</div>

    <div className="min-h-screen bg-white flex flex-col justify-center  ">
   

      {/* Main Card */}
      <main className="flex justify-center  px-4">
        
        <div className="border-2 border-pink-300 rounded-lg bg-gray-100 shadow-lg p-4 sm:p-6 w-full max-w-3xl">
             {/* Header */}
      <header className="text-pink-500 font-bold text-2xl sm:text-3xl text-center py-6">
        &gt;&gt; {hotel.city} &lt;&lt;
      </header>
          <div className="flex flex-col md:flex-row gap-4 items-center border-2 p-2 border-pink-300 bg-white  rounded-lg">
            {/* Image */}
            <img
              src={hotel.img} // Replace with actual image path
              alt={hotel.city}
              className="w-full md:w-1/2 h-48 object-cover rounded"
            />

            {/* Details */}
            <div className="text-center md:text-left space-y-2">
              <p><span className="font-semibold">City:</span> {hotel.city}</p>
              <p><span className="font-semibold">Region:</span> {hotel.region}</p>
              <p><span className="font-semibold">Season:</span> {hotel.season}</p>
              <p><span className="font-semibold">Days:</span> {hotel.days}</p>
              <p><span className="font-semibold">Cost:</span> Rs {hotel.cost}</p>

              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 mt-3 cursor-pointer"
                onClick={() => navigate(`/hotels/city/${hotel.city.toLowerCase()}`)}

              >
                View Hotels
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      
      <footer className="text-center text-gray-500 text-sm py-6">
        © 2024 WayferTravels. All rights reserved.
      </footer>
    </div>
    </>
  );
}

export default HotelDetail;
