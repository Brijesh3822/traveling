import React from 'react'

function HeroSection() {
  const handleScroll = () => {
  const section = document.getElementById('places'); 
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <div className='banner-bg ' id="home">
        <div className='container h-[70vh] flex flex-col justify-center md:ps-[100px] ps-[10px]'>
      <h1 className='md:text-[35px] text-[30px] text-[#1e90ff] '>Incredible India:</h1>
      <p className='text-[15px] text-white mt-[10px]'>Where Every Place is a Story, Every Journey an Adventure.</p>
      <button onClick={handleScroll} className='py-[10px] bg-[#333] text-[18px] rounded-[50px] w-[160px] text-white mt-[10px] cursor-pointer hover:bg-[#1e90ff] transition-all duration-300'>Travel Now</button>
      </div>
    </div>
  )
}

export default HeroSection;
