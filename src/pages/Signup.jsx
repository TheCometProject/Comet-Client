import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import img1 from "../Assets/Logo.png";
import img2 from "../Assets/pic.svg";
import { mdiGoogle } from "@mdi/js";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, success, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(`${firstName} ${lastName}`, email, password, confirmPassword);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-[#F8FAFC]  md:flex-row"
      >
        <div className="flex flex-col pl-[50px] sm:pl-8 md:pl-[85px]  lg:w-1/2">
          <Link to="/">
            <img
              src={img1}
              className=" mt-6 h-[33px] w-32 items-start"
              alt="Comet logo"
            />
          </Link>
          <img
            src={img2}
            className="-ml-16 mt-[15px] hidden h-auto w-full lg:block"
            alt="Illustration"
          />
        </div>
        <div className="md:cez min-w-sm flex w-full flex-col items-center justify-center sm:mt-12 md:w-1/2 lg:mt-32">
          <div className="absolute right-0 top-0  mr-8 mt-8 hidden  sm:block md:mr-[80px] md:mt-6 lg:mr-[230px]">
            <p className="text-16 font-bold text-[#334155] ">
              Already have an account?{" "}
              <Link to="/Login" className="text-[#1D4ED8] underline">
                <span className="cursor-pointer text-[#1D4ED8] underline">
                  Log in
                </span>
              </Link>{" "}
              here
            </p>
          </div>
          <div className=" text-16 -mt-7 ml-[270px] font-bold text-blue-700 underline sm:hidden md:hidden lg:hidden">
            <Link to="/Login">Log in</Link>
          </div>
          <h3 className="mt-[70px] whitespace-nowrap text-center  text-4xl font-bold text-[#334155] sm:mt-0  md:mr-6  lg:-mt-8 lg:text-5xl">
            Sign up
          </h3>
          <div className="mt-8 w-[400px] max-w-md">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="  ml-[50px] h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] sm:ml-0 sm:h-[63px] sm:w-[400px]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className=" ml-[50px] mt-6 h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] sm:ml-0 sm:h-[63px] sm:w-[400px]"
                required
              />

              {/* PAGE 2 */}

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="ml-[50px] mt-6 h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] sm:ml-0 sm:h-[63px] sm:w-[400px]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="ml-[50px] mt-6 h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] sm:ml-0 sm:h-[63px] sm:w-[400px]"
                required
              />
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="ml-[50px] mt-6 h-[45px] w-[300px] rounded-md border border-[#1D4ED8] px-4 text-base text-[#334155] sm:ml-0 sm:h-[63px] sm:w-[400px]"
                required
              />

              <div>
                {error &&
                  (Array.isArray(error) ? (
                    error.map((err) => (
                      <div
                        className="mt-4 flex rounded-md bg-red-50 p-2 text-sm text-red-500"
                        role="alert"
                        key={err.msg}
                      >
                        <svg
                          aria-hidden="true"
                          class="mr-3 inline h-5 w-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <span class="font-medium"></span>
                        </div>
                        {err.msg}
                        <span class="sr-only">Info</span>
                      </div>
                    ))
                  ) : (
                    <div className="ml-12 mt-4 flex w-[300px] rounded-md bg-red-50 p-2 text-sm text-red-500 sm:ml-0 sm:w-auto">
                      <svg
                        aria-hidden="true"
                        class="mr-3 inline h-5 w-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span class="font-medium"></span>
                      </div>
                      {error}
                      <span class="sr-only">Info</span>
                    </div>
                  ))}
                <button
                  type="submit"
                  className="text-18 ml-[50px] mt-6 h-[45px] w-[300px] rounded-md bg-[#1D4ED8] text-center font-bold text-white sm:ml-0 sm:h-[63px] sm:w-[400px]"
                  disabled={isLoading}
                >
                  Sign up
                </button>
                {success && <div className="success">{success}</div>}
              </div>
            </div>
          </div>
          {/*-------- <div className="mt-6 grid sm:w-[403px] w-[303px] grid-cols-3  items-center text-[#6B7280]">
            <hr className="border-[#6B7280]"></hr>
            <p className="text-16 text-center font-bold ">Or</p>
            <hr className="border-[#6B7280]"></hr>
          </div>
          
          
          <div className="mt-6 grid sm:w-[403px] w-[303px] grid-cols-3 items-center  gap-5 sm:pl-10 pl-4">
            <div className="h-[60px] w-[60px]  rounded-[6px]  border-2 border-[#CBD5E1]">
              <svg
                className="m-4 h-6 w-6 fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            

            <div className="h-[60px] w-[60px]  rounded-[6px]  border-2 border-[#CBD5E1]">
              <svg
                className="m-4 h-6 w-6 "
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={mdiGoogle} fill="#EB4335" />
              </svg>
            </div>
           
            <div className="h-[60px] w-[60px]  rounded-[6px]  border-2 border-[#CBD5E1]">
              <svg
                className="m-4 h-6 w-6 fill-current text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </div>
                  </div>----*/}
        </div>
      </form>
    </div>
  );
};

export default Signup;
