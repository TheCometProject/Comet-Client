import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import heroimg from "../Assets/Images/image 3.png";
import img1 from "../Assets/Logo.png";
import prfl from "../Assets/profilsvg.svg";
import keyboard from "../Assets/Icons/Keyboard.svg";


  const Dashboard  = () =>{

    const [roomID, setRoomId] = useState("");
  
    function handleChange(e){
      setRoomId(()=>e.target.value);
    } ;

  return (
    <div className='w-full h-full bg-slate-50'>
    <div id='navbar' className="px-20 pt-4 pb-2 flex justify-between items-center fixed w-full left-0 top-0  z-10">
      <div className="">
        <Link to="/"><img className="w-32" src={img1} alt="Comet Logo" /></Link>
      </div>
      <div className="flex justify-end mt-4 -mr-2">
      <img
        src={prfl}
        alt="Profile Picture"
        className="w-10 h-10 mr-4 -mt-2 l rounded-full"/>
     
    </div>
    </div>
    <section id='hero2' className=' flex px-20 pb-48 pt-36'>
     <div className=' w-1/2 items-center md:justify-center '>
       <h1 className=' mb-8  text-5xl sm:items-center md:justify-center justify-normal  sm:text-6xl lg:text-6xl font-bold leading-[65px] sm:leading-[65px] md:leading-[76px] text-slate-700'>Experience <br/>
       seamless virtual<br/> meetings<span className="text-blue-700">_</span>
       </h1>
       <p className=" mb-8 text-xl hidden lg:block leading-[30px] text-slate-600">
       Schdule new meetings and manage your existing meetings<br/> in one place
       </p>
       <div className=" flex flex-col sm:flex-row  gap-3 ">
        
         <div className=" flex flex-col sm:flex-row">
    <button className=" w-auto h-[47px] sm:w-[165px] sm:h-[auto]  bg-blue-700 text-white">
           <img 
            className="mx-2 inline w-2    fill-slate-50"
           //src={}
           />Create space  
        </button>
        </div>
        
        <div className="flex flex-row">
        <div className="relative">
        <img className="absolute w-4 sm:auto  top-1/2 -translate-y-1/2 left-4" src={keyboard} alt="" />
       <input
        onChange={handleChange}
        type="text"
        className="button-outlined placeholder:text-blue-700  !pl-12 !pr-0"
        placeholder='Enter the space code'
        value={roomID}
        />
        </div>
         <button className="button-invisible">Join</button>
        </div>
       
       
       </div> 
       </div>
       <div className=" w-1/2">
        <img
          className=" hidden md:block hero-img ml-auto aspect-auto h-full"
          src={heroimg}
          alt=""
        />
      </div>
    </section>
    </div>
      
     
     
  );
  };
  export default Dashboard;


