import { Link } from "react-router-dom";

import Logo from "../../Assets/Logo.png";
import burgerMenu from "../../Assets/Icons/menu-burger.svg";
import cross from "../../Assets/Icons/cross.svg";
import { useState } from "react";

export default function () {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-start justify-between bg-slate-50 px-8 pb-2 pt-4 md:px-20 lg:items-center">
      <div
        className={`pointer-events-none absolute inset-0 h-screen bg-gray-900 transition-all ${
          sideMenuOpen ? "opacity-50" : "opacity-0"
        }`}
      ></div>
      <div className="lg:basis-1/3">
        <Link to="/">
          <img className="w-32" src={Logo} alt="Comet Logo" />
        </Link>
      </div>
      <button
        className="lg:hidden"
        onClick={() => {
          setSideMenuOpen((prev) => !prev);
        }}
      >
        <img className="w-8" src={burgerMenu} alt="" />
      </button>
      <div
        className={`${
          !sideMenuOpen && "translate-x-full  lg:translate-x-0"
        } absolute right-0 top-0 flex h-fit flex-col justify-between rounded-l-lg bg-slate-200 px-10 py-8 transition-all lg:static lg:h-auto lg:basis-2/3 lg:flex-row lg:items-center lg:bg-transparent lg:px-0 lg:py-0`}
      >
        <div className="absolute left-8 top-8 lg:hidden">
          <button
            onClick={() => {
              setSideMenuOpen((prev) => !prev);
            }}
          >
            <img className="w-4" src={cross} alt="" />
          </button>
        </div>
        <div>
          <ul className="flex flex-col gap-8 text-center font-bold text-slate-900 lg:flex-row lg:text-left">
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Community">Community</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mt-10 flex w-48 flex-col gap-2 lg:mt-0 lg:w-auto lg:flex-row lg:gap-8">
          <Link to="/Login">
            <button className="button-solid !w-full lg:w-auto">Login</button>
          </Link>
          <Link to="/Signup">
            <button className="button-outlined w-full lg:w-auto">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
