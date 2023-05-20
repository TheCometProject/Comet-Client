import clockIcon from "../../pages/Assets/Icons/clock.svg";
import recordIcon from "../../pages/Assets/Icons/record-circle-fill.svg";
import peopleIcon from "../../pages/Assets/Icons/people.svg";
import hamburgerIcon from "../../pages/Assets/Icons/menu-burger.svg";

export default function({fullscreen, setSideMenuOpen}){
    return (
        <header
        className={`relative pb-6 transition-all ${
          fullscreen ? "-top-full" : "top-0"
        }`}
      >
        <div className="flex items-start justify-between">
          <h1 className="mb-8 text-2xl font-bold text-slate-50 md:text-4xl">
            UI UX Team meeting_
          </h1>
          <button onClick={() => setSideMenuOpen(() => true)}>
            <img className="mt-2 w-6" src={hamburgerIcon} alt="" />
          </button>
        </div>
        {/* PARAMETERS */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-2 mr-2 flex flex-wrap items-center gap-2 sm:gap-8">
            <div className="flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
              <img src={clockIcon} alt="" />
              <p className="text-xs text-slate-900">Meet 13:49</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-red-200 px-4 py-1">
              <img src={recordIcon} alt="" />
              <p className="text-xs text-red-700">Recording 10:12</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-2 rounded-full bg-blue-300 px-4 py-1">
            <img src={peopleIcon} alt="" />
            <p className="text-xs text-slate-900">24</p>
          </div>
        </div>
      </header>
    )
}