import React from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../Assets/Logo.png";

export default function ErrorPage() {
  return (
    <div className=" bg-gray-100">
      <div className="absolute left-0 top-0 p-4 pl-[50px] sm:pl-8  md:pl-[85px]">
        <Link to="/">
          <img
            src={img1}
            alt="Logo"
            className="mt-4 h-[33px] w-[130px] items-start"
          />
        </Link>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <p className="text-bold mb-6 text-5xl text-blue-700 sm:mb-6">Oops!</p>
        <p className="text-bold mb-6 text-center text-[30px]  text-[#64748B] sm:mb-8">
          An unknown error has occured
        </p>

        <hr className="mt-4  w-[358px]  border-[#6B7280] sm:w-[658px]"></hr>
        <p className="mb-4 mt-4 text-center text-[20px] text-[#64748B] sm:mb-8">
          If you have any questions, please don't hesitate to
          <span>
            <Link
              to="/Contact"
              className=" text-bold ml-2 mt-8  text-[20px] text-[#334155] hover:underline  sm:mt-2  "
            >
              Contact us
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
