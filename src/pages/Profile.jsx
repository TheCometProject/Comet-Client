import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../Assets/logo.png";

export default function () {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  console.log(user);

  const [userFullName, setUserFullName] = useState(user.fullName);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState("random shit password");
  const [userProfilePic, setUSerProfilePic] = useState(user.profilePic);
  const [passwordHidden, setPasswordHidden] = useState("true");

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setUSerProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="px-8 md:px-20 ">
      <header className="py-6">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
      </header>
      <main className="relative mx-0 mt-16 flex flex-col items-center rounded-lg bg-slate-200 px-8 py-4 md:mx-32 md:flex-row md:px-16 md:py-16 border-2 border-blue-700">
        <h1 className="absolute -top-16 left-1/2 -translate-x-1/2  text-4xl font-bold text-blue-700">
          User Profile
        </h1>
        <div className="md:basis-1/3">
          <div className="flex w-fit flex-col items-center gap-4">
            <img
              className="w-32 rounded-full border-2 border-blue-700 "
              src={userProfilePic}
              alt=""
            />
            <label
              className="mb-8 cursor-pointer rounded-lg bg-blue-200 px-4 py-2 text-xl text-blue-700"
              onClick={handleImageChange}
            >
              Change Photo
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="mb-auto flex basis-2/3 flex-col gap-8">
          <div className="mt-4 flex w-full flex-col gap-2 self-start">
            <div className="flex justify-between">
              <p className="text-xl">
                <span className="inline-block w-32 text-xl text-blue-700">
                  Full Name:
                </span>{" "}
                {userFullName}
              </p>
              <button className="px-2 py-1 bg-blue-200 text-blue-700 rounded-md">
                <img src="" alt="" />
                Edit
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">
                <span className="inline-block  w-32 text-xl text-blue-700">
                  Email:
                </span>{" "}
                {userEmail}
              </p>
              <button className="px-2 py-1 bg-blue-200 text-blue-700 rounded-md">
                <img src="" alt="" />
                Edit
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">
                <span className="inline-block w-32  text-xl text-blue-700">
                  Password:
                </span>{" "}
                {passwordHidden
                  ? "*".repeat(userPassword.length)
                  : userPassword}
              </p>
              <button className="px-2 py-1 bg-blue-200 text-blue-700 rounded-md">
                <img src="" alt="" />
                Edit
              </button>
            </div>
          </div>
          <div className="ml-auto w-fit">
            <button
              className="rounded-lg bg-red-300 px-4 py-2 text-xl text-red-700"
              onClick={logout}
            >
              logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
