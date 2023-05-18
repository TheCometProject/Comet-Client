import { useState } from "react";
import Logo from "./Assets/Logo.png";

export default function () {
  const [roomName, setRoomName] = useState("");

  return (
    <div>
      <header className="px-20 pt-4 pb-2">
        <img className="w-32" src={Logo} alt="" />
      </header>
      <main>
        <div className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-slate-900 px-8 py-6">
          <div className="mb-6">
            <p className="mb-4 text-xl font-semibold text-slate-900">
              Space name:
            </p>
            <input
              className="button-outlined"
              type="text"
              placeholder="UI UX Team meeting"
              value={roomName}
              onChange={(e) => setRoomName(() => e.target.value)}
            />
          </div>
          <div>
            <p className="mb-4 text-xl font-semibold text-slate-900">
              roomID: <span className="text-blue-700">1315454123435</span>
            </p>
          </div>
          <button className="button-solid mx-auto">Create space</button>
        </div>
      </main>
    </div>
  );
}
