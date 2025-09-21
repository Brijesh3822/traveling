import React from 'react'
import img01 from "../assets/img01.jpg";
import img02 from "../assets/img02.jpg";
import img03 from "../assets/img03.jpg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";
import img06 from "../assets/img06.jpg";
import img07 from "../assets/img07.jpg";
import img08 from "../assets/img08.jpg";
import img09 from "../assets/img09.jpg";
import { FaShare } from "react-icons/fa6";


const places = [
  {
    id: 1,
    name: "Manali",
    price: "Rs 35000",
    img: img01,
  },
  {
    id: 2,
    name: "Rajasthan",
    price: "Rs 40000",
    img: img02,
  },

  
  {
    id: 3,
    name: "Ladakh",
    price: "Rs 50000",
    img: img03,
  },
  {
    id: 4,
    name: "Chennai",
    price: "Rs 30000",
    img: img04,
  },
   {
    id: 5,
    name: "Kerala",
    price: "Rs 21000",
    img: img05,
  },
   {
    id: 6,
    name: "Goa",
    price: "Rs 15000",
    img: img06,
  },
   {
    id: 7,
    name: "Sikkim",
    price: "Rs 55000",
    img: img07,
  },
   {
    id: 8,
    name: "Pune",
    price: "Rs 15000",
    img: img08,
  },
   {
    id: 9,
    name: "Mumbai",
    price: "Rs 15000",
    img: img09,
  },
];

function PopularPlaces() {
  return (
    <>
    <div className='mt-[40px]  ' id="places">
        <div className='container flex justify-center bg-[#FFF5FA] py-[10px]'>
        <h1 className='text-[40px] text-[#1e90ff]  font-[700]'>Popular  <span className='text-[#333]'>Places</span></h1>
        </div>
    
    </div>





<div className="container pt-[40px] grid xl:grid-cols-3 md:grid-cols-2 gap-[20px]">
      {places.map((place) => (
        <div
          key={place.id}
          className="shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)]"
        >
          {/* Card */}
          <div className="relative flex flex-col items-center overflow-hidden group cursor-pointer pt-[20px]">
            <img
              src={place.img}
              alt={place.name}
              className="object-cover transition-transform duration-300 group-hover:scale-105 w-[375px] h-[250px]"
            />

            {/* Hover Buttons */}
            <div className="absolute bottom-[-100%] left-0 w-full grid grid-cols-[60%_40%] justify-center items-center bg-[#1e90ff] text-[20px] font-[700] text-white transition-all duration-500 group-hover:bottom-0">
              <button className="hover:bg-[#333] p-[10px] transition-all duration-300 cursor-pointer">
                Visit Us
              </button>
              <button className="border-l-2 text-[30px] flex justify-center hover:bg-[#333] p-[10px] transition-all duration-300 cursor-pointer">
                <FaShare />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-[20px] flex flex-col items-center text-center text-[25px] font-[700]">
            <h2 className="text-[#333]">{place.name}</h2>
            <h2 className="text-[#1e90ff]">{place.price}</h2>
          </div>
        </div>
      ))}
    </div>
    
    
    
    
    </>
  )
}

export default PopularPlaces;
