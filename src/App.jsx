import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import TOS from "./pages/TOS";

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
              element={!user ? <Landing /> : <MainPage />}
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
              path="/terms-and-services" 
              element={<TOS />} 
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
