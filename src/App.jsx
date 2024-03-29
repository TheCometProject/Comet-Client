import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TOS from "./pages/TOS";
import MeetingRoom from "./pages/MeetingRoom";
import CreateRoom from "./pages/CreateRoom";
import Forgot from "./pages/Forget";
import Reset from "./pages/Reset";
import LeftMeeting from "./pages/LeftMeeting";
import Profile from "./pages/Profile";

// components
function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={!user ? <Landing /> : <Dashboard />} />
            <Route
              path="/Login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/Signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Forget" element={<Forgot />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/terms-and-services" element={<TOS />} />
            <Route
              path="/meeting/:roomId"
              element={user ? <MeetingRoom /> : <Navigate to="/" />}
            />
            <Route
              path="/Create-room"
              element={user ? <CreateRoom /> : <Navigate to="/" />}
            />
            <Route
              path="/LeftMeeting/:roomId"
              element={user ? <LeftMeeting /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/" />}
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
