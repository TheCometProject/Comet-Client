import { Link } from "react-router-dom";

import Logo from "../../pages/Assets/Logo.png";

export default function () {
  return (
    <header className="px-20 pt-4 pb-2 | flex justify-between items-center fixed w-full left-0 top-0 bg-slate-50 z-10">
      <div className="">
        <Link to="/"><img className="w-32" src={Logo} alt="Comet Logo" /></Link>
      </div>
      <div>
        <ul className="flex gap-8 | font-bold">
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
      <div className="flex gap-8">
        <Link to="/Login"><button className="button-solid">Login</button></Link>
        <Link to="/Signup"><button className="button-outlined">Sign up</button></Link>
      </div>
    </header>
  );
}
