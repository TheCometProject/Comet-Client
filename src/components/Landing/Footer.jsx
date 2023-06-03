import Logo from "../../Assets/Logo light.png";
import facebookIcon from "../../Assets/Icons/facebook.svg";
import instagramIcon from "../../Assets/Icons/instagram.svg";
import twitterIcon from "../../Assets/Icons/twitter.svg";

import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="flex flex-col items-center gap-12 md:gap-0 justify-between bg-slate-900 px-20 pb-20 pt-16 text-center md:flex-row md:items-start md:text-left">
      <div className="basis-[calc(33%-2rem)]">
        <img className="mb-4 w-32 md:mb-8" src={Logo} alt="" />
        <nav className="ml-0 flex flex-col gap-2 font-medium !text-slate-50 md:ml-4">
          <a href="#FAQ">FAQ</a>
          <Link to="/contact">Contact</Link>
          <Link to="/terms-and-services">Terms and services</Link>
        </nav>
      </div>
      <div className=" basis-[calc(33%-2rem)] !text-slate-50">
        <h4 className="h4 !mb-4 !pb-0 !pt-0 !font-semibold !text-slate-50 md:mb-8">
          Contact us
        </h4>
        <div className="flex flex-col gap-2">
          <p>thecometproject@gmail.com</p>
          <p>+213 555 555 555</p>
          <p>Esi sba, Place El Wiam, Sidi Bel Abbes</p>
        </div>
      </div>
      <div className="flex basis-[calc(33%-2rem)] flex-col justify-start">
        <h4 className="h4 !mb-4 !pb-0 !pt-0 !font-semibold !text-slate-50 md:mb-8">
          Socials
        </h4>
        <div className="flex gap-2 text-slate-50">
          <ul className="flex gap-6">
            <li>
              <a href="">
                <img className="w-8" src={facebookIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-8" src={twitterIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img className="w-8" src={instagramIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
