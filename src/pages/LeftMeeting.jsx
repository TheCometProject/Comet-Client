import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import img1 from "../Assets/Logo.png";

export default function() {
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();

  const {roomId} = useParams();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(countdown);
      navigate("/");
    }

    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <div>
      

      <div className="lg:w-1/2 md:pl-[85px] flex flex-col pl-[50px]  sm:pl-8">
        <Link to="/">
          <img src={img1} className="mt-6 h-[33px] w-[130px] items-start" alt="Comet logo" />
        </Link>
      </div>
      
      <div className=" md:mt-32 mt-20">
        <p className="flex justify-center text-slate-700 text-2xl md:text-3xl lg:text-4xl font-bold">
          You left the meeting
        </p>
        <div className="flex justify-center">
          <Link to={`/meeting/${roomId}`}>
            <button className="bg-white text-blue-700 rounded-[7px] h-[55px] w-[230px] mt-8 mb-5 border-blue-700 border-2 md:w-[265px]">
              Rejoin
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="bg-blue-700 w-[230px] h-[55px] text-white rounded-[7px] md:w-[265px]">
              Go back to home page
            </button>
          </Link>
        </div>
      </div>
      <div className="timer text-slate-700 text-lg mt-28 lg:ml-9 lg:mt-36 flex justify-center lg:justify-start">{seconds}s to go back to home page ... </div>
      
    </div>
  );
}