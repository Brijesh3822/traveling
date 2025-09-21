import React from 'react'
import { FaStar } from "react-icons/fa";
import review01 from "../assets/review01.jpg";
import review02 from "../assets/review02.png";
import review03 from "../assets/review03.jpg";

 const reviews = [
    {
      name: "Atharva",
      location: "Goa",
      image: review01,
      text: "Booking my dream trip to the serene backwaters of Kerala was a breeze with Travelscapes – seamless and stress-free!",
      rating: 5
    },
    {
      name: "Pretty",
      location: "Maharashtra",
      image: review02,
      text: "Thanks to Travelscapes, I explored the majestic beauty of Rajasthan with ease, and the deals were unbeatable!",
      rating: 4
    },



    {
      name: "Tejas",
      location: "Kerala",
      image: review03,
      text: "Made my adventure to the mesmerizing Himalayan mountains unforgettable, with expert guidance and fantastic itineraries",
      rating: 5
    }
  ];
function Testimonials() {
  return (
    <div>
        <div className='mt-[40px] ' id="review" >
        <div className='container flex justify-center bg-[#FFF5FA] py-[10px]'>
        <h1 className='text-[40px] text-[#1e90ff]  font-[700]'>Customer's   <span className='text-[#333]'>Review</span></h1>
        </div>
        


    


    
        <div className="container pt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="p-[30px] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)]"
        >
          {/* Stars */}
          <div className="flex text-[20px] text-[#1e90ff]">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Review Text */}
          <p className="mt-[10px] text-[15px] text-[#999]">{review.text}</p>

          {/* User Info */}
          <div className="mt-[20px] flex">
            <img
              src={review.image}
              alt={review.name}
              className="size-[60px] rounded-[100%]"
            />
            <div className="flex flex-col justify-center ms-[10px]">
              <h4 className="text-[20px] text-[#333] font-[700]">
                {review.name}
              </h4>
              <p className="text-[15px] text-[#999]">{review.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Testimonials;
