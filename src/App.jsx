import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/error";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import TOS from "./pages/TOS";
import MeetingRoom from "./pages/MeetingRoom";

// components
function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={!user ? <Landing /> : <Dashboard />}
            />
            <Route
              path="/Login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/Signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route 
              path="/Contact" 
              element={<Contact />} 
            />
            <Route 
              path="/error" 
              element={<Error />} 
            />
            <Route 
              path="/terms-and-services" 
              element={<TOS />} 
            /> 
            <Route 
              path="/meeting/:roomId" 
              element={user ? <MeetingRoom /> : <Navigate to="/" />} 
            /> 
            <Route
              path="/*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
