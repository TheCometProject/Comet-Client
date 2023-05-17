import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
import img1 from './Assets/Logo.png';
import img2 from './Assets/pic.svg';
import { mdiGoogle } from '@mdi/js';

const Signup = () => {
  const [FirstName,setFirstName] = useState("");
  const [FamillyName,setFamillyName] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(FirstName, FamillyName);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/SignUpTwo');
  }; 

  return (
    <div className="bg-[#F8FAFC] w-full min-h-screen ">
    <form onSubmit={handleSubmit} className="flex flex-col bg-[#F8FAFC]  md:flex-row">
      <div className="relative w-full md:w-1/2  flex flex-col items-start">
        <img src={img1} className="mt-4 ml-10 md:ml-[85px]" alt="Logo" />
        <img src={img2} className="hidden lg:block z -mt-8 w-full h-auto" alt="Illustration" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col lg:mt-32 sm:mt-12 md:cez items-center justify-center min-w-sm">
      <div className="absolute top-0 right-0 mt-4 md:ml-[85px] hidden sm:block md:mr-[250px] sm:mr-[100px]">
      <p className="text-[#334155] text-16 font-bold ">
      Already have an account?{" "} <Link to="/Login" className="text-[#1D4ED8] underline">
      <span className="text-[#1D4ED8] underline cursor-pointer">Log in</span></Link> here
    </p>

      </div>
        <h3 className="text-4xl lg:text-5xl md:-mt-10  md:-mr-2 sm:mt-4 text-[#334155] whitespace-nowrap  font-bold text-center">
        Sign up
        </h3>
        <div className="max-w-md w-[400px] mt-14">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={FirstName}
              className="w-[400px] h-[63px] px-4 text-[#334155] text-base border border-[#1D4ED8] rounded-md"
            />
            <input
              type="Famillyname"
              placeholder="Familly Name"
              onChange={(e) => setFamillyName(e.target.value)}
              value={FamillyName}
              className="w-[400px] h-[63px] px-4 mt-6 text-[#334155] text-base border border-[#1D4ED8] rounded-md"
            />
      
            <div>
              <button onClick={handleClick}
                className="w-[400px] h-[63px] mt-6 bg-[#1D4ED8] rounded-md text-center text-18 text-white font-bold"
                disabled={isLoading}
              >
                Next
              </button>
              {error &&
                (Array.isArray(error) ? (
                  error.map((err) => (
                    <div key={err.msg}>{error.msg}</div>
                  ))
                ) : (
                  <div>{error}</div>
                ))}
            </div>
            </div>
            </div>
            <div class="mt-6 grid grid-cols-3 w-[403px]  items-center text-[#6B7280]">
            <hr class="border-[#6B7280]"></hr>
            <p class="text-center text-16 font-bold ">Or</p>
            <hr class="border-[#6B7280]"></hr>
           </div>
           {/*<>---------------facebook-------------------------------</>*/}
           <div className="mt-6 grid grid-cols-3 items-center gap-5 pl-10  w-[403px]">
            
             <div className="border-2 border-[#CBD5E1]  rounded-[6px]  w-[60px] h-[60px]">
             <svg
              class="w-6 h-6 text-blue-600 fill-current m-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
              <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            </div>
             {/*<>---------------google-------------------------------</>*/}
           
             <div className="border-2 border-[#CBD5E1]  rounded-[6px]  w-[60px] h-[60px]">
              <svg className="h-6 w-6 m-4 " viewBox="0 0 24 24" fill="currentColor">
              <path d={mdiGoogle} fill="#EB4335" />
              </svg>
            </div>
            {/*<>---------------linkeden-------------------------------</>*/}
            <div className="border-2 border-[#CBD5E1]  rounded-[6px]  w-[60px] h-[60px]">
               <svg
                  class="w-6 h-6 text-blue-500 fill-current m-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path
                     d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
               </svg>
               
            </div>  
           </div> 
            </div>
            
            </form>
            </div>
  );};

  export default Signup;