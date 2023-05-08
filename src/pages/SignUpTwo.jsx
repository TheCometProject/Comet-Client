import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import img1 from "./Assets/Logo.png";
import img2 from "./Assets/pic.svg";
import { mdiGoogle } from "@mdi/js";

const SignUpTwo = () => {
  const [email, setEmail] = useState("");
  const [password, confirmPassword, setPassword] = useState("");
  const { signup, error, success, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full min-h-screen flex bg-[#F8FAFC] ">
        {/*<>----------------------------------------------</>*/}
        <div className="relative w-1/2 items-start flex flex-col ">
          <img src={img1} className=" mt-4  ml-10 md:ml-[85px]" />
          <img src={img2} className="hidden md:block w-[634px] h-[508px] " />
        </div>
        {/*<>----------------------------------------------</>*/}
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div>
            <p className="text-[#334155] text-16 font-bold mt-4 text-center hidden sm:block">
              {" "}
              Already have account ?{" "}
              <span className=" text-16 font-bold text-[#1D4ED8] underline cursor-pointer">
                Log in{" "}
              </span>{" "}
              here
            </p>
          </div>
          <div className="w-full  h-full flex flex-col  items-center pt-16 pr-[210px] md:p-20  text-[#334155]">
            <h3 className=" text-3xl lg:text-5xl whitespace-nowrap font-bold  ">
              Sign up{" "}
            </h3>
            {/*<>----------------------------inputs------------------</>*/}
            <div className="flex flex-col ">
              <input
                type={email}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-[400px] h-[63px] text-[#334155] pl-5 font-light text-14  border border-[#1D4ED8] rounded-md mt-8 "
              />
              <input
                type={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-[400px] h-[63px] text-[#334155] pl-5 font-light text-14  border border-[#1D4ED8] rounded-md mt-5 "
              />
              <input
                type={confirmPassword}
                placeholder={"confirm Password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-[400px] h-[63px] text-[#334155] pl-5 font-light text-14  border border-[#1D4ED8] rounded-md mt-5 "
              />
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center mt-3">
                  <input type={"checkbox"} className="w-4 h-4 mr-2" />
                  <p className="text-sm text-[#334155]">Remember me?</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  Forget password?
                </p>
              </div>
              {/*<>-----------------------button-----------------------</>*/}
              <div>
                <button
                  className="bg-[#1D4ED8] mt-5 w-[400px] h-[63px] rounded-md text-center text-18 text-white font-bold"
                  disabled={isLoading}
                >
                  Sign up{" "}
                </button>

                {error &&
                  (Array.isArray(error) ? (
                    error.map((err) => <div key={err.msg}>{error.msg}</div>)
                  ) : (
                    <div>{error}</div>
                  ))}
              </div>
            </div>
            {/*<>---------------or-------------------------------</>*/}
            <div class="mt-6 grid grid-cols-3 w-[403px]  items-center text-[#6B7280]">
              <hr class="border-[#6B7280]"></hr>
              <p class="text-center text-16 font-bold ">Or</p>
              <hr class="border-[#6B7280]"></hr>
            </div>
            {/*<>---------------facebook-------------------------------</>*/}
            <div className="mt-6 grid grid-cols-3 items-center gap-5 pl-14  w-[403px]">
              <div className="border-2 border-[#CBD5E1]  rounded-[6px]  w-[60px] h-[60px]">
                <svg
                  class="w-6 h-6 text-blue-600 fill-current m-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              {/*<>---------------google-------------------------------</>*/}

              <div className="border-2 border-[#CBD5E1]  rounded-[6px]  w-[60px] h-[60px]">
                <svg
                  className="h-6 w-6 m-4 "
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={mdiGoogle} fill="#EB4335" />
                </svg>
              </div>
              {/*<>---------------linkeden-------------------------------</>*/}
              <div className="border-2 border-[#CBD5E1]  rounded-[6px]  w-[60px] h-[60px]">
                <svg
                  class="w-6 h-6 text-blue-500 fill-current m-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpTwo;
