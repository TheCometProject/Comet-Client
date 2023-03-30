import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import img1 from './img/Logo.svg';
import img2 from './img/pic.svg';

const colors ={
  primary :"#1D4ED8",
  background :"#F8FAFC",
  text:"#334155"
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    
    <div className="w-full min-h-screen flex bg-[#F8FAFC] ">
      <div className="relative w-1/2 items-start flex flex-col ">
        <img src={img1} className=" mt-4 ml-[85px]" />
        <img src={img2} className=" w-[634px] h-[508px] " />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
      <div className="w-full ">
          <p className="text-[#334155] text-16 font-bold mt-4 ml-[400px]">New to comet ? <span className=" text-16 font-bold text-[#1D4ED8] underline cursor-pointer"> Sign up </span> here</p>

      </div>
        <div className="w-full flex flex-col items-center p-28 text-[#334155]">
           <h3 className="text-5xl font-bold  ">Log in</h3>
           <div className="flex flex-col ">
            <input
            type={email}
            placeholder={"Email"}
            className="w-[400px] h-[63px] text-[#334155] pl-5 font-light text-14  border border-[#1D4ED8] rounded-md mt-8 " />
            <input 
            type={password}
            placeholder={"Password"}
            className="w-[400px] h-[63px] text-[#334155] pl-5 font-light text-14  border border-[#1D4ED8] rounded-md mt-8 " />
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center mt-3">
                <input
                 type={"checkbox"} className="w-4 h-4 mr-2" />
                <p className="text-sm text-[#334155]">Remember me?</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget password?</p>
            </div>
            <div >
              <button className="bg-[#1D4ED8] mt-8 w-[400px] h-[63px] rounded-md text-center text-18 text-white font-bold">Log in</button>
            </div>
             
           </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
