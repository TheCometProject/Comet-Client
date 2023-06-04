import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/Logo.png";
import forget from "../Assets/forget.svg";



const Forgot = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email');
    }
    console.log('Reset password link sent to:', email);
    setEmail('');
    
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
                <h3 className=" whitespace-nowrap text-center  text-4xl font-bold text-[#334155] md:-mr-2  lg:text-5xl">
                     Forget password ?
                </h3>
                <p className="whitespace-nowrap text-center text-slate-600  text-[16px] lg:text-xl font-light mt-4 md:-mr-2">
                   Enter your email address below,<br/>
                   and we'll send you a link to reset your password.
                </p>
                  
                  <div className="flex flex-col ">
                     <input
                         type="email"
                         placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                         value={email}
                  className="sm:w-[400px] sm:h-[63px]  h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] mt-10 sm:ml-0"
                     />
                   
                   <button
                     className="text-18 sm:w-[400px] sm:h-[63px]  mt-6 h-[45px] w-[300px] rounded-md bg-[#1D4ED8] text-center font-bold text-white sm:ml-0">   
                  Send</button>  
                  {errorMessage && 
                    <div  class="flex p-2 mt-4 text-sm text-red-500 rounded-md bg-red-50 " role="alert">
                       <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>

                        <div>
                          <span class="font-medium"></span>
                         </div>{errorMessage} <span class="sr-only">Info</span>
                    </div>} 
                 </div>
            </div>
            
       
      </form>
        </div>
  );
};

export default Forgot;
