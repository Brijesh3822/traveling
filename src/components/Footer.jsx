function Footer() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="container grid lg:grid-cols-4 md:grid-cols-2 pb-[20px]">
                <div>

                    <h4 className="text-[25px] text-[#333]   font-[700]">Quick Links</h4>


                    <div className="mt-[10px] flex flex-col gap-[10px]">
                        <p
                            onClick={() => scrollToSection("home")}
                            className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
                        >
                            Home
                        </p>
                        <p
                            onClick={() => scrollToSection("about")}
                            className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
                        >
                            About
                        </p>
                        <p
                            onClick={() => scrollToSection("places")}
                            className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
                        >
                            Places
                        </p>
                        <p
                            onClick={() => scrollToSection("review")}
                            className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
                        >
                            Review
                        </p>
                        <p
                            onClick={() => scrollToSection("contact")}
                            className="hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer"
                        >
                            Contact Us
                        </p>

                    </div>
                </div>

                <div>

                    <h4 className="text-[25px] text-[#333]   font-[700]">Extra Links</h4>
                    <div className="mt-[10px] flex flex-col gap-[10px]">


                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300  cursor-pointer '>
                            My account

                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>My List

                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>My favorite</p>

                    </div>
                </div>
                <div>

                    <h4 className="text-[25px] text-[#333]   font-[700]">Popular Travel Locations</h4>
                    <div className="mt-[10px] flex flex-col gap-[10px]">


                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300  cursor-pointer '>
                            Manali

                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>Rajasthan


                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>Mumbai
                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>
                            Kerala</p>
                    </div>
                </div>
                <div>

                    <h4 className="text-[25px] text-[#333]   font-[700]">Contact Info</h4>
                    <div className="mt-[10px] flex flex-col gap-[10px]">


                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300  cursor-pointer '>
                            Google

                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>+91 9898989898


                        </p>
                        <p className='hover:text-[#1e90ff] hover:underline transition-all duration-300 cursor-pointer'>WayferTravels@gmail.com



                        </p>

                    </div>
                </div>

            </div>
            <div className="container border-t border-gray-700 pb-[40px] mt-[20px] text-center">
                <h4 className="mt-[20px] text-[25px] font-[700] text-[#333]  ">©2024 WayferTravels</h4>
            </div>
        </>
    )
}

export default Footer;