import React from "react";
import img1 from "../Assets/Logo.png";
import done from "../Assets/done.svg"
import {Link} from "react-router-dom";

export default function Done() {
    return ( 
        <div className="min-h-screen w-full bg-[#F8FAFC] ">
            <div className="min-h-screen w-full bg-[#F8FAFC] ">
       <div className="lg:w-1/2 md:pl-[85px] flex flex-col pl-[50px]  sm:pl-8">
       <Link to="/"><img src={img1} className=" mt-6 h-[33px] w-[130px] items-start"  alt="Comet logo" /></Link>
       <img src={done} className="mt-[150px] ml-5 hidden h-auto w-[500px]  lg:block" />
       </div></div>
     <div className=" flex flex-col -mt-[450px] lg:ml-[600px] justify-center items-center bg-[#F8FAFC]">
      <div className="lg:flex-col  -mt-4 md:flex-col md:justify-center flex flex-col items-center">
        <h3 className=" text-[45px] sm:text-[55px] font-bold text-lg text-[#334155] leading-[76px]">Email Verified ..!</h3>
        <div className=" mt-4 md:w-full  justify-center">
        <button className=" w-[350px] h-[55px] sm:w-[400px] sm:h-[63px] py-2 px-4 ml-[2px] sm:-ml-[4px] lg:ml-[6px]  bg-blue-500 text-white rounded-lg">
            Back to home
          </button>
        </div> </div></div>
       </div>
    );};