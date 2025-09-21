import React from 'react'
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
function AboutUs() {
  const handleScroll = () => {
  const section = document.getElementById('review'); 
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <div className='mt-[40px] ' id="about">
    <div className='container flex justify-center bg-[#FFF5FA] py-[10px]'>
                                 <h1 className='md:text-[40px] text-[30px] text-[#1e90ff]  font-[700]'>About <span className='text-[#333]'>Us</span></h1>
    </div>
    <div className='container pt-[40px] grid lg:grid-cols-2 grid-cols-1 gap-[20px]'>
        <div className="shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] p-[10px] relative">
  <div>
    <video
      src="./src/assets/about-vid.mp4"
      className="w-[100%] h-[100%]"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  </div>

  <div className="absolute 2xl:top-50 xl:top-40 lg:top-25 md:top-50 top-20  w-full flex justify-center bg-white ">
    <h1 className="text-[30px] font-[800] text-[#333] bg-clip-text opacity-20">
      Best Places
    </h1>
  </div>
</div>

        <div className='flex flex-col justify-center '>
            <h2 className='md:text-[30px] text-[25px] text-[#333] font-[800]'>Why Choose Us?</h2>

            <p className='mt-[10px] md:text-[18px] text-[14px] text-[#333]'>What truly sets us apart is our unwavering commitment to your satisfaction. Our 24/7 customer support is always ready to assist you, and we offer competitive prices and exclusive deals to save you money while you explore the world. Choose our travel website, and you're not just a traveler; you're part of a community that values your journey and strives to make it enjoyable and hassle-free. Join us today for unforgettable adventures, where your travel needs take center stage.</p>
             <button onClick={handleScroll} className='py-[10px] bg-[#333] text-[18px] rounded-[50px] w-[160px] text-white mt-[20px] cursor-pointer hover:bg-[#1e90ff] transition-all duration-300'>Learn More</button>
        </div>
    </div>

    <div className='bg-[#eee] mt-[20px] '>
        <div className='container py-[50px] grid xl:grid-cols-4 md:grid-cols-2  gap-[20px]'>
            <div className='bg-white p-[20px] flex'>
                <img  src={icon1}  className='w-[50px] h-[50px]'/>
                <div className='ps-[30px]'>
                    <p className='text-[16px] text-[#333] font-[600]'>Free Booking</p>
                    <p>On All Orders</p> 
                </div>
            </div>

             <div className='bg-white p-[20px] flex'>
                <img  src={icon2}  className='w-[50px] h-[50px]'/>
                <div className='ps-[30px]'>
                    <p className='text-[16px] text-[#333] font-[600]'>10 Days Returns</p>
                    <p>Moneyback Guarantee</p> 
                </div>
            </div>
            <div className='bg-white p-[20px] flex'>
                <img  src={icon3}  className='w-[50px] h-[50px]'/>
                <div className='ps-[30px]'>
                    <p className='text-[16px] text-[#333] font-[600]'>Offer & Gifts</p>
                    <p>On All Orders</p> 
                </div>
            </div>
            <div className='bg-white p-[20px] flex'>
                <img  src={icon4}  className='w-[50px] h-[50px]'/>
                <div className='ps-[30px]'>
                    <p className='text-[16px] text-[#333] font-[600]'>Secure Paymens</p>
                    <p>Protected By Razorpay</p> 
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs;
