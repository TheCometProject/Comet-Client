import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../Assets/logo.png";
import profile from "../Assets/Avatars/avatar02.png";

export default function () {
  const { user } = useAuthContext();
  console.log(user);

  const [userFullName, setUserFullName] = useState(user.fullName);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState("random shit password");
  const [passwordHidden, setPasswordHidden] = useState("true");

  return (
    <div className="px-8 md:px-20 ">
      <header className="py-4">
        <img className="w-32" src={logo} alt="" />
      </header>
      <main className="relative mx-0 mt-16 flex flex-col md:flex-row items-center rounded-lg bg-slate-200 px-8 py-4 md:mx-32 md:px-16 md:py-16">
        <h1 className="absolute -top-16 left-1/2 -translate-x-1/2  text-4xl text-blue-700">
          User Profile
        </h1>
        <div className="md:basis-1/3">
          <div className="flex w-fit flex-col items-center gap-4">
            <img
              className="w-32 rounded-full border-2 border-blue-700 "
              src={profile}
              alt=""
            />
            <p className="w-fit text-xl text-blue-700">Change Photo</p>
          </div>
        </div>
        <div className="flex w-full md:basis-2/3 flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-xl">
              <span className="inline-block w-32 text-xl text-blue-700">
                Full Name:
              </span>{" "}
              {userFullName}
            </p>
            <button>
              <img src="" alt="" />
              <p>Edit</p>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-xl">
              <span className="inline-block  w-32 text-xl text-blue-700">
                Email:
              </span>{" "}
              {userEmail}
            </p>
            <button>
              <img src="" alt="" />
              <p>Edit</p>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-xl">
              <span className="inline-block w-32  text-xl text-blue-700">
                Password:
              </span>{" "}
              {passwordHidden ? "*".repeat(userPassword.length) : userPassword}
            </p>
            <button>
              <img src="" alt="" />
              <p>Edit</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
