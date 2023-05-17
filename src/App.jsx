import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUpTwo from "./pages/SignUpTwo";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";

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
              element={user ? <Home /> : <Navigate to="/Home" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup-2" 
              element={!user ? <SignUpTwo /> : <Navigate to="/" />} 
            />
            <Route 
            path="/Contact"
            element={<Contact />}
            />
            <Route 
            path="/Home"
            element={<Landing />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
