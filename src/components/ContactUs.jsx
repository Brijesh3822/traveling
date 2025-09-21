import contactus from "../assets/contact_us.svg";

function ContactUs(){
    return(
        <div>
            <div className='mt-[40px] '>
        <div className='container flex justify-center bg-[#FFF5FA] py-[10px]'>
        <h1 className='text-[40px] text-[#1e90ff]  font-[700]'>           Contact 
   <span className='text-[#333]'> Us</span></h1>
        </div>
        </div>





            <div className="container grid md:grid-cols-2 items-center ">
                <div className="shadow-[0_0.5rem_1rem_rgba(0,0,0,0.1)] py-[20px] px-[25px]">
                    <form>
                        <input type="text" placeholder="Name" className="p-[10px] font-[17px] border border-gray-700 text-[#333] w-full"/>
                        <input type="text" placeholder="Email" className="p-[10px] font-[17px] border border-gray-700 text-[#333] w-full mt-[10px]"/>
                        <input type="number" placeholder="Number" className="p-[10px] font-[17px] border border-gray-700 text-[#333] w-full mt-[10px]"/>
                        
                        <textarea type="text" placeholder="Message" className="p-[10px] font-[17px] border border-gray-700 text-[#333] w-full mt-[10px]"/>

                        <button className='py-[10px] bg-[#333] text-[18px] rounded-[50px] w-[160px] text-white mt-[20px] cursor-pointer hover:bg-[#1e90ff] transition-all duration-300'>Send Message</button>
                    </form>
                </div>

                <div>


                    <img src={contactus} className="size-[500px]"/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;