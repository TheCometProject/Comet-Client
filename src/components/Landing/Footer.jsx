import Logo from "../../pages/Assets/Logo light.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="flex items-start justify-between bg-slate-900 px-20 pb-20 pt-16">
      <div className="w-96">
        <img className="mb-8 w-32" src={Logo} alt="" />
        <nav className="ml-4 flex flex-col gap-2 font-medium !text-slate-50">
          <a href="#FAQ">FAQ</a>
          <Link to="/contact">Contact</Link>
          <Link to="/terms-and-services">Terms and services</Link>
        </nav>
      </div>
      <div className="!text-slate-50 w-96">
        <h4 className="h4 !mb-8 !pb-0 !pt-0 !font-semibold !text-slate-50">
          Contact us
        </h4>
        <div className="flex flex-col gap-2">
          <p>thecometproject@gmail.com</p>
          <p>+213 555 555 555</p>
          <p>Esi sba, Place El Wiam, Sidi Bel Abbes</p>
        </div>
      </div>
      <div className="flex justify-start flex-col w-96">
        <h4 className="h4 !mb-8 !pb-0 !pt-0 !font-semibold !text-slate-50">
          Socials
        </h4>
        <div className="flex gap-2 text-slate-50">
            <p>f</p>
            <p>i</p>
            <p>t</p>
        </div>
      </div>
    </footer>
  );
}
