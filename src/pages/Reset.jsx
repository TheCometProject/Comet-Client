import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/Logo.png";
import forget from "../Assets/forget.svg";

const Reset = () => {
const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!password || !confirmPassword){
      setErrorMessage('Please enter a password');
    }
    else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('Password changed successful!');
    }
  };

      return (
        <div className="min-h-screen w-full bg-[#F8FAFC] ">
        <form
          onSubmit={handleSubmit}
          className=" flex h-full flex-col bg-[#F8FAFC]  md:flex-row"
        >
          <div className="lg:w-1/2 md:pl-[85px] flex flex-col pl-[50px]  sm:pl-8">
          <Link to="/"><img src={img1} className=" mt-6 h-[33px] w-[130px] items-start"  alt="Comet logo" /></Link>
            <img src={forget} className="ml-4 mt-[90px] items-center hidden lg:flex" />
          </div>
          <div className="md:w-1/2 flex w-full flex-col items-center justify-center  mt-[170px] ">
                <h3 className=" whitespace-nowrap text-center  text-4xl font-bold text-[#334155]   lg:text-5xl">
                     Reset password ?
                </h3>
               
                  
                  <div className="flex flex-col ">
                     <input
                         type="password"
                         placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                         value={password}
                  className="sm:w-[400px] sm:h-[63px]  h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] mt-10 sm:ml-0"
                     />
                     <input
                         type="password"
                         placeholder="Confirm password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                         value={confirmPassword}
                  className="sm:w-[400px] sm:h-[63px]  h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] mt-6 sm:ml-0"
                     />
                   
                    <button
                       className="text-18 sm:w-[400px] sm:h-[63px]  mt-6 h-[45px] w-[300px] rounded-md bg-[#1D4ED8] text-center font-bold text-white sm:ml-0" 
                    > Save</button>
                     {errorMessage && <div className="text-red-500 text-sm ml-0 sm:ml-0 mt-1">{errorMessage}</div>} 
                 
                 </div>
            </div>
  
         
         
        </form>
          </div>
      );

};
export default Reset;