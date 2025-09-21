import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Check localStorage for logged-in user on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  // Menu items for scrolling sections
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Places", id: "places" },
    { name: "Review", id: "review" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleScrollOrNavigate = (item) => {
    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="py-[20px] flex flex-row justify-between items-center">
          <h1
            className="text-[30px] text-[#1e90ff] font-[700] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            WayferTravels
          </h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-[30px] text-[20px] font-[500] text-[#666] items-center">
            {menuItems.map((item, index) => (
              <p
                key={index}
                onClick={() => handleScrollOrNavigate(item)}
                className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </p>
            ))}

            {loggedInUser ? (
              <>
                <p className="ml-4 text-[#1e90ff] font-semibold">
                  {loggedInUser.username}
                </p>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
              <p
                onClick={() => navigate("/login")}
                className="ml-4 hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
              >
                Login/Signup
              </p>
               <p
                onClick={() => navigate("/admin")}
                className="ml-4 hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
              >
                Admin
              </p>
              </>
            )}
          </div>

          {/* Hamburger */}
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

      {/* Mobile Drawer */}
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
              onClick={() => {
                handleScrollOrNavigate(item);
                setIsOpen(false);
              }}
              className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </p>
          ))}

          {loggedInUser ? (
            <>
              <p className="mt-4 text-[#1e90ff] font-semibold">
                {loggedInUser.username}
              </p>
              <button
                onClick={handleLogout}
                className="mt-2 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <p
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              className="mt-4 hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
            >
              Login/Signup
            </p>
          )}
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
