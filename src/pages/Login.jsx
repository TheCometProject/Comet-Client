import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import img1 from "./Assets/Logo.png";
import img2 from "./Assets/pic.svg";
import { mdiGoogle } from "@mdi/js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] ">
      <form
        onSubmit={handleSubmit}
        className=" flex h-full flex-col bg-[#F8FAFC]  md:flex-row"
      >
         <div className="lg:w-1/2 flex flex-col md:pl-[85px] sm:pl-8  pl-[50px]">
        <Link to="/"><img src={img1} className=" items-start w-32 h-[33px] mt-4" /></Link>
        <img src={img2} className="lg:flex hidden -mt-2 -ml-4" />
      </div>
        <div className="min-w-sm md:cez min-w-sm flex w-full flex-col items-center justify-center sm:mt-16 md:w-1/2 lg:mt-36">
          <div className="absolute right-0 top-0 mt-4 hidden sm:mr-[100px] sm:block md:ml-[85px] md:mr-[270px]">
            <p className="text-16 font-bold text-[#334155] ">
              New to comet? 
              <Link to="/Signup" className="text-[#1D4ED8] underline">
                <span className="cursor-pointer text-[#1D4ED8] underline">
                  Sign up
                </span>
              </Link>
              here
            </p>
          </div>
          <h3 className="whitespace-nowrap text-center mt-12  text-4xl font-bold text-[#334155] sm:mt-0 md:-mr-2  md:-mt-10 lg:text-5xl">
            Log in
          </h3>
          <div className=" mt-14 w-[400px] h-[63px]max-w-md sm:ml-0 ">
            <div className="flex flex-col ">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="sm:w-[400px] sm:h-[63px] w-[300px] h-[45px] rounded-md border border-[#1D4ED8] px-4 sm:ml-0 ml-[50px] text-base text-[#334155]"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mt-6 sm:w-[400px] sm:h-[63px] w-[300px] h-[45px] rounded-md border border-[#1D4ED8]  sm:ml-0 ml-[50px] px-4 text-base text-[#334155]"
              />
              <div className="mt-4 flex items-center justify-between ">
                <div className="flex items-center sm:-ml-0 ml-12 ">
                  <input type="checkbox" className="mr-2 h-4 w-4" />
                  <p className="text-sm text-[#334155]">Remember me?</p>
                </div>
                <p className="sm:-mr-0 mr-12 cursor-pointer whitespace-nowrap text-sm font-medium underline underline-offset-2">
                  Forgot password?
                </p>
              </div>
              <div>
                <button
                  className="text-18 mt-6 sm:w-[400px] sm:h-[63px] w-[300px] h-[45px] rounded-md bg-[#1D4ED8] text-center font-bold text-white sm:ml-0 ml-[50px]"
                  disabled={isLoading}
                >
                  Log in
                </button>
                {error &&
                  (Array.isArray(error) ? (
                    error.map((err) => <div key={err.msg}>{error.msg}</div>)
                  ) : (
                    <div>{error}</div>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-6 grid sm:w-[403px] w-[303px] grid-cols-3  items-center text-[#6B7280]">
            <hr className="border-[#6B7280]"></hr>
            <p className="text-16 text-center font-bold ">Or</p>
            <hr className="border-[#6B7280]"></hr>
          </div>
          {/*<>---------------facebook-------------------------------</>*/}
          <div className="mt-6 grid sm:w-[403px] w-[303px] grid-cols-3 items-center gap-5  sm:pl-10 pl-4">
            <div className="h-[60px] w-[60px]  rounded-[6px]  border-2 border-[#CBD5E1]">
              <svg
                className="m-4 h-6 w-6 fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            {/*<>---------------google-------------------------------</>*/}

            <div className="h-[60px] w-[60px]  rounded-[6px]  border-2 border-[#CBD5E1]">
              <svg
                className="m-4 h-6 w-6 "
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={mdiGoogle} fill="#EB4335" />
              </svg>
            </div>
            {/*<>---------------linkeden-------------------------------</>*/}
            <div className="h-[60px] w-[60px]  rounded-[6px]  border-2 border-[#CBD5E1]">
              <svg
                className="m-4 h-6 w-6 fill-current text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
