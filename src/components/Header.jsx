import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Places", id: "places" },
    { name: "Review", id: "review" },
    { name: "Login/Signup", id: "login" },
    { name: "Admin", id: "admin" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)]">
      <div className="container">
        <div className="py-[20px] flex flex-row justify-between items-center">
      
          <h1 className="text-[30px] text-[#1e90ff] font-[700]">WayferTravels</h1>

          
          <div className="hidden lg:flex gap-[30px] text-[20px] font-[500] text-[#666]">
            {menuItems.map((item, index) => (
              <p
                key={index}
                onClick={() => handleScroll(item.id)}
                className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </p>
            ))}
          </div>

         
          <div className="block lg:hidden">
            {isOpen ? (
              <FaTimes
                onClick={() => setIsOpen(false)}
                className="text-[28px] text-[#1e90ff] cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setIsOpen(true)}
                className="text-[28px] text-[#1e90ff] cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

     
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
  
        <div className="flex justify-end p-4">
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="text-[28px] text-[#1e90ff] cursor-pointer"
          />
        </div>

     
        <div className="flex flex-col gap-6 px-6 text-[20px] font-[500] text-[#666]">
          {menuItems.map((item, index) => (
            <p
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Header;
