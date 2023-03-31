import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Comet</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.fullName}</span>
              <button onClick={logout}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">next</Link>
              <Link to="/SignUpTwo">Sign up</Link>
              
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
