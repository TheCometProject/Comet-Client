import React from "react";
import img1 from "../Assets/Logo.png";
import veri from "../Assets/veri.svg";
import { Link } from "react-router-dom";
export default function Veri() {
    return ( 
      <div className="min-h-screen w-full bg-[#F8FAFC] ">
       <div className="lg:w-1/2 md:pl-[85px] flex flex-col pl-[50px]  sm:pl-8">
       <Link to="/"><img src={img1} className=" mt-6 h-[33px] w-[130px] items-start"  alt="Comet logo" /></Link>
       <img src={veri} className="mt-[150px] ml-5 hidden h-auto w-full  lg:block" />
       </div>
       <div className=" w-1/2  w-full  items-center justify-center  ml-2 lg:ml-[350px] sm:ml-[10px] mt-[220px]  lg:-mt-[262px]">        
        <h3 className="font-bold text-[40px] sm:text-[60px] text-lg text-[#334155] text-center  leading-[65px] ">Kindly check your <br /> email inbox</h3>
       </div>
      </div>


    )
    
    
    ;};