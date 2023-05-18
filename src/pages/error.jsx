import React from 'react';
import img1 from "./Assets/Logo.png";

const ErrorPage = () => {
  return (
    <div className=" bg-gray-100">
    <div className="absolute top-0 left-0 p-4 md:pl-[85px] sm:pl-8  pl-[50px]">
      <img src={img1} alt="Logo" className="items-start w-[130px] h-[33px] mt-4" />
    </div>
      <div className="flex flex-col justify-center min-h-screen bg-gray-100 items-center px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <p className="text-center text-[#64748B] text-[30px] text-bold  mb-6 sm:mb-8">
          <span className='text-[35px] text-bold text-[#334155]'>Oops</span> The link you entered does not lead to a valid room. 
        </p>
        <p className="text-center text-[#64748B] text-[20px] mb-6 sm:mb-8">Please double-check and enter the correct link to join the room. 
           </p>

        <hr className="border-[#6B7280]  sm:w-[658px]  w-[358px] mt-4"></hr>
        <p className="text-center text-[#64748B] text-[20px] mb-4 sm:mb-8 mt-4">
          If you have any questions, please don't hesitate to <span><a href="" className=" text-[#334155] hover:underline ml-2  sm:mt-2 mt-8 text-bold  text-[20px]  ">
          Contact us
        </a></span>
        </p>
       
      </div>
      </div>
   
  );
};

export default ErrorPage;
