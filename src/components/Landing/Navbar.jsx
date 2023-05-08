import Logo from "../../pages/Assets/Logo.png";

export default function () {
  return (
    <header className="px-20 pt-4 pb-2 | flex justify-between items-center">
      <div className="">
        <img className="w-32" src={Logo} alt="Comet Logo" />
      </div>
      <div>
        <ul className="flex gap-8 | font-bold">
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="Community">Community</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-8">
        <button className="button-solid">Login</button>
        <button className="button-outlined">Sign up</button>
      </div>
    </header>
  );
}
